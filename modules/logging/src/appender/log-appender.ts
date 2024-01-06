import { type LogEventRecord } from '../event-record/log-event-record';

/**
 * Log appender
 *
 * An appender is responsible of log event record storage.
 *
 * @template LogEventRecordType Log event record type
 */
export interface LogAppender {
  (logEventRecord: LogEventRecord): void;
}
