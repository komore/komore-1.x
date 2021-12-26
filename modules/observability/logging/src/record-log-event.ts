import { Temporal } from '@js-temporal/polyfill';
import { type LogEvent } from './definition/log-event';
import { type LogEventRecord } from './definition/log-event-record';
import { logEventRecordsSubject } from './definition/log-event-records';
import { type LogGroup } from './definition/log-group';

/**
 * Records a log event
 * @param logEvent Log event
 */
export function recordLogEvent<LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>>(
  logEvent: LogEventType
): void {
  const { message } = logEvent;
  const timestamp = Temporal.Now.plainDateTimeISO();
  const logEventRecord: LogEventRecord<LogEventType> = {
    logContext: {},
    logEvent,
    message,
    timestamp
  };

  logEventRecordsSubject.next(logEventRecord);
}
