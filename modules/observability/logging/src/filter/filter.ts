import type { UntypedLogEventRecord } from '../log-event-record';
import type { FilterResult } from './filter-result';

/**
 * Filter
 * @template LogEventRecordType Log event record type
 */
export interface Filter<LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord> {
  (logEventRecord: LogEventRecordType): FilterResult;
}
