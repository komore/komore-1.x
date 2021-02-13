import type { LogEvent } from './log-event';
import { LogEventRecord } from './log-event-record';
import { logEventRecordsSubject } from './log-event-records';
import type { LogGroup } from './log-group';

/**
 * Records a log event
 * @param logEvent Log event
 */
export function recordLogEvent<LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>>(
  logEvent: LogEventType
): void {
  const timestamp = new Date();
  const logEventRecord: LogEventRecord<LogEventType> = {
    logContext: {},
    logEvent,
    message: logEvent.message,
    timestamp
  }

  logEventRecordsSubject.next(logEventRecord);
}
