import { type Temporal } from '@komore/temporal';

import { type GenericLogEvent } from '../event/generic-log-event';

/**
 * Log event record
 */
export interface LogEventRecord {
  readonly context: Record<string, unknown>;
  readonly event: GenericLogEvent;
  readonly message: string;
  readonly timestamp: Temporal.PlainDateTime;
}
