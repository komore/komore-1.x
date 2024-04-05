import { type LogEventRecord } from '../record/log-event-record';
import { type EncodedLogEventRecord } from './encoded-log-event-record';

/**
 * Log encoder
 */
export interface LogEncoder {
  /**
   * Encodes a log event record
   *
   * @param logEventRecord Log event record
   * @returns Encoded log event record
   */
  (logEventRecord: LogEventRecord): EncodedLogEventRecord;
}
// TODO: start and end
