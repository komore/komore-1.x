import { type LogEvent } from './event/log-event';
import { logEventRecordsSubject } from './event-record/log-event-records';
import { type LogGroup } from './group/log-group';
import { buildLogEventRecord } from './event-record/build-log-event-record';

/**
 * Records a log event
 *
 * @param logEvent Log event
 */
export function recordLogEvent<
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>(logEvent: LogEventType): void {
  const logEventRecord = buildLogEventRecord(logEvent);
  logEventRecordsSubject.next(logEventRecord);
}
