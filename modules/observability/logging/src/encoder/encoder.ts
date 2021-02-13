import type { LogEvent } from '../log-event';
import type { LogEventRecord } from '../log-event-record';
import type { LogGroup } from '../log-group';

/**
 * Encoder
 */
export interface Encoder {
  (record: LogEventRecord<LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>>): void;
}
