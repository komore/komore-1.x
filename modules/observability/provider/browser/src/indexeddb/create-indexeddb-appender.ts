import type { Appender, UntypedLogEventRecord } from '@komore/observability/logging';
import { createIndexedDBDatabase, putIndexedDBItem } from '@komore/web/storage/indexeddb';
import { combineLatest, Observable, Subject, tapValue } from '@komore/reactive';
import type { IndexedDBAppenderOptions } from './indexeddb-appender-options';

/**
 * Creates an IndexedDB appender
 * @param options IndexedDB appender options
 * @returns IndexedDB appender
 */
export function createIndexedDBAppender(options: IndexedDBAppenderOptions): Observable<Appender> {
  const { databaseName, storeName } = options;
  return new Observable<Appender>(observer => {
    const logEventRecordSubject = new Subject<UntypedLogEventRecord>();
    const logEventRecorded$ = combineLatest({
      database: createIndexedDBDatabase(databaseName),
      logEventRecord: logEventRecordSubject.asObservable()
    }).pipe(tapValue(({ database, logEventRecord }) => putIndexedDBItem(database, storeName, logEventRecord)));
    observer.add(logEventRecorded$.subscribe());
    observer.next(logEventRecordSubject);
  });
}
