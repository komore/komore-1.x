import { type Domain } from '@komore/domain';
import { type DateTimeString } from '@komore/temporal';
import { type ReadonlyRecord } from '@komore/typescript';

import { type LogEventSeverity } from '../../severity/log-event-severity';

/**
 * JSON-encoded log event record
 */
export interface JsonEncodedLogEventRecord {
  /**
   * Context
   */
  readonly context: ReadonlyRecord<string, unknown>;
  /**
   * Domain
   */
  readonly domain: Domain;
  /**
   * Execution context
   */
  readonly executionContext: ReadonlyRecord<string, unknown>;
  /**
   * Message
   */
  readonly message: string;
  /**
   * Name
   */
  readonly name: string;
  /**
   * Severity
   */
  readonly severity: LogEventSeverity;
  /**
   * Timestamp
   */
  readonly timestamp: DateTimeString;
}
