import { type ReadonlyRecord } from '@komore/typescript';

import { type LogEventSeverity } from './log-event-severity';

/**
 * Log event severities
 */
export const logEventSeverities = {
  /**
   * Trace information
   */
  trace: 50,
  /**
   * Debug information
   */
  debug: 100,
  /**
   * Base information
   */
  info: 200,
  /**
   * Notice
   */
  notice: 300,
  /**
   * Warning
   */
  warning: 400,
  /**
   * Error
   */
  error: 500,
  /**
   * Critical error
   */
  critical: 600,
  /**
   * Alert
   */
  alert: 700,
  /**
   * Emergency
   */
  emergency: 800,
} as const satisfies ReadonlyRecord<string, LogEventSeverity>;
