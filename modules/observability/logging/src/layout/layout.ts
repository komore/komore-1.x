import type { UntypedLogEventRecord } from '../log-event-record';

/**
 * Layout
 */
export interface Layout<LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord> {
  (logEventRecord: LogEventRecordType): string;
}
