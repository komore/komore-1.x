import { type LogAppender, type UntypedLogEventRecord } from '@komore/observability/logging';
import { combineLatest, Observable, Subject, tapNext } from '@komore/reactive';
import { createIndexedDBDatabase, putIndexedDBItem } from '@komore/web/storage/indexeddb';

import { type IndexedDBAppenderOptions } from './indexeddb-appender-options';

/**
 * Creates an IndexedDB appender
 * @param options IndexedDB appender options
 * @returns IndexedDB appender
 */
export function createIndexedDBAppender(options: IndexedDBAppenderOptions): Observable<LogAppender> {
  const { databaseName, storeName } = options;
  return new Observable<LogAppender>(observer => {
    const logEventRecordSubject = new Subject<UntypedLogEventRecord>();
    const logEventRecorded$ = combineLatest({
      database: createIndexedDBDatabase({ name: databaseName }),
      logEventRecord: logEventRecordSubject.asObservable(),
    }).pipe(tapNext(({ database, logEventRecord }) => putIndexedDBItem(database, storeName, logEventRecord)));
    observer.add(logEventRecorded$.subscribe());
    observer.next(logEventRecordSubject);
  });
}
