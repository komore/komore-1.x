import { type UntypedLogEventRecord } from '../definition/log-event-record';
import { type LogFilterResult } from './log-filter-result';

/**
 * Log filter
 *
 * @template LogEventRecordType Log event record type
 */
export interface LogFilter<LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord> {
  (logEventRecord: LogEventRecordType): LogFilterResult;
}
