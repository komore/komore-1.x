import { type ReadonlyRecord } from '@komore/typescript';

import { type LogEventSeverity } from './log-event-severity';

/**
 * Default log event severities
 */
export const defaultLogEventSeverities = {
  /**
   * Trace information
   */
  TRACE: 50,
  /**
   * Debug information
   *
   * @note Sometimes named verbose
   */
  DEBUG: 100,
  /**
   *
   */
  INFO: 200, //
  NOTICE: 300, //
  WARNING: 400, //
  ERROR: 500, //
  CRITICAL: 600, //
  ALERT: 700, //
  EMERGENCY: 800, //
} as const satisfies ReadonlyRecord<string, LogEventSeverity>;

// TODO:
// Azure has Verbose/Information/Warning/Error/Critical
