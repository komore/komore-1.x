import { type ReadonlyRecord } from '@komore/typescript';

import { type GenericLogEvent } from '../event/generic-log-event';

/**
 * Log event record
 */
export interface LogEventRecord {
  readonly context: ReadonlyRecord<string, unknown>;
  readonly event: GenericLogEvent;
  readonly message: string;
  readonly timestamp: Temporal.Instant;
}
