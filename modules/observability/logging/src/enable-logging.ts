import { isDefined } from '@komore/functional';
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
