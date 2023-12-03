import { shareReplay, Subject, tapNext } from '@komore/reactive';

import { type LogEventRecord } from './event-record/log-event-record';
import { logEventToLogEventRecord } from './event-record/log-event-to-log-event-record';
import { type Logger } from './logger';
import { type LoggerOptions } from './logger-options';

/**
 * Creates a logger
 *
 * @param options Logger options
 * @returns Logger
 */
export function createLogger(options: LoggerOptions): Logger {
  const appenders = options.appenders ?? [];
  const toRecord = logEventToLogEventRecord();
  const logEventRecordsSubject = new Subject<LogEventRecord>();
  const logEventRecords$ = logEventRecordsSubject
    .asObservable()
    .pipe(shareReplay({ bufferSize: 100, refCount: false }));
  logEventRecords$.pipe(tapNext(eventRecord => appenders.forEach(appender => appender(eventRecord)))).subscribe();
  return logEvent => {
    const logEventRecord = toRecord(logEvent);
    logEventRecordsSubject.next(logEventRecord);
  };
}

/*import { isDefined } from '@komore/functional';
import { combineLatest, map, redactValue, tapNext, withLatestFrom, type Observable } from '@komore/reactive';

import { logAppenders } from './appender/log-appenders';
import { logEventRecords } from './event-record/log-event-records';
import { logEventMappings } from './mapping/log-event-mappings';

export function enableLogging(): Observable<void> {
  const mappingsWithAppender = combineLatest([logEventMappings, logAppenders]).pipe(
    map(([eventMappings, appenders]) =>
      eventMappings.map(eventMapping => ({
        ...eventMapping,
        appender: appenders.get(eventMapping.appenderName),
      }))
    )
  );

  return logEventRecords.pipe(
    withLatestFrom(mappingsWithAppender),
    tapNext(([logEventRecord, mappings]) =>
      mappings
        .filter(({ severity }) => severity <= logEventRecord.logEvent.severity)
        .map(({ appender }) => appender)
        .filter(isDefined)
        .forEach(appender => appender(logEventRecord))
    ),
    redactValue()
  );
}
*/
