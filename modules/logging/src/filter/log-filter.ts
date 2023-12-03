import { type LogEventRecord } from '../event-record/log-event-record';
import { type LogFilterResult } from './log-filter-result';

/**
 * Log filter
 */
export interface LogFilter {
  (logEventRecord: LogEventRecord): LogFilterResult;
}
