import { type UntypedLogEventRecord } from '../event-record/log-event-record';

/**
 * Log appender
 *
 * An appender is responsible of log event record storage.
 *
 * @template LogEventRecordType Log event record type
 */
export interface LogAppender<LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord> {
  (logEventRecord: LogEventRecordType): void;
}
