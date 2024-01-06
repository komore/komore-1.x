import { type LogAppender, type LogEventRecord } from '@komore/logging';
import { combineLatest, concatMap, Subject } from '@komore/reactive';
import { createIndexedDbDatabase, putIndexedDbItem } from '@komore/web/storage/indexeddb';

import { type IndexedDbLogAppenderOptions } from './indexeddb-log-appender-options';

/**
 * Creates an IndexedDB log appender
 *
 * @param appenderOptions IndexedDB log appender options
 * @returns IndexedDB appender
 */
export function createIndexedDbLogAppender(appenderOptions: IndexedDbLogAppenderOptions): LogAppender {
  const { databaseName: name, storeName } = appenderOptions;
  const logEventRecordSubject = new Subject<LogEventRecord>();

  // TODO: unsubscribe mechanism (pass host interface via appender options?)
  combineLatest({
    database: createIndexedDbDatabase({ name }),
    logEventRecord: logEventRecordSubject.asObservable(),
  })
    .pipe(concatMap(({ database, logEventRecord }) => putIndexedDbItem(database, storeName, logEventRecord)))
    .subscribe();

  return logEventRecord => logEventRecordSubject.next(logEventRecord);
}
