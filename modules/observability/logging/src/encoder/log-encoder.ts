import { type LogEvent } from '../event/log-event';
import { type LogEventRecord } from '../event-record/log-event-record';
import { type LogGroup } from '../group/log-group';

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
  (record: LogEventRecord<LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>>): string;
}
