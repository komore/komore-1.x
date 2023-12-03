import { type LogEventRecord } from '../event-record/log-event-record';

/**
 * Log encoder
 */
export interface LogEncoder {
  /**
   * Encodes a log event record into a string
   *
   * @param record Log event record
   * @returns Encoded log event record
   */
  (record: LogEventRecord): string;
}
