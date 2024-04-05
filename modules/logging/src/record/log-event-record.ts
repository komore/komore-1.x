import { type ReadonlyRecord } from '@komore/typescript';

import { type LogEvent } from '../event/log-event';

/**
 * Log event record
 */
export interface LogEventRecord {
  /**
   * Context
   */
  readonly context: ReadonlyRecord<string, unknown>;
  /**
   * Event
   */
  readonly event: LogEvent;
  /**
   * Execution context
   */
  readonly executionContext?: ReadonlyRecord<string, unknown>;
  /**
   * Message
   */
  readonly message: string;
  /**
   * Timestamp
   */
  readonly timestamp: Temporal.Instant;
}
