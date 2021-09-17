import type { LogEvent } from '../definition/log-event';
import type { LogEventRecord } from '../definition/log-event-record';
import type { LogGroup } from '../definition/log-group';

/**
 * Encoder
 */
export interface Encoder {
  (record: LogEventRecord<LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>>): void;
}
