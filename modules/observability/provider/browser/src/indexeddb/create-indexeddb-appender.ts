import type { Appender, LogEvent, LogEventRecord, LogGroup } from '@komore/observability/logging';
import { createIndexedDBDatabase, putIndexedDBItem } from '@komore/web/storage/indexeddb';
import type { Observable } from '@komore/reactive';
import { combineLatest, Subject } from '@komore/reactive';
import { tap } from '@komore/reactive/operators';
import type { IndexedDBAppenderOptions } from './indexeddb-appender-options';

/**
 * Creates an IndexedDB appender
 * @param options IndexedDB appender options
 * @returns IndexedDB appender
 */
export function createIndexedDBAppender(options: IndexedDBAppenderOptions): Observable<Appender> {
  return new Observable<Appender>(observer => {
    const logEventRecords = new Subject<LogEventRecord<LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>>>();
    const subscription = combineLatest({
      database: createDatabase(options.name),
      logEventRecord: logEventRecords.asObservable()
    }).pipe(
      tap({
        next({ database, logEventRecord }) {
          putItem
        }
      })
    ).subscribe();

    observer.next(logEventRecord => logEventRecords.next(logEventRecord));

    return () => subscription.unsubscribe();
  });
}
