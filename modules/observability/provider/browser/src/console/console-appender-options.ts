import { type ConsoleSeverityRange } from './console-severity-range';

/**
 * Console appender options
 */
export interface ConsoleAppenderOptions {
  /**
   * Severity mapping
   *
   * List of severity ranges that determine which console method is used to print a log event record.
   *
   * By default, `LogEventSeverity` mapping is used:
   * - `debug` for the range `[0-200[`: `DEBUG`
   * - `info` for the range `[200-400[`: `INFO`, `NOTICE`
   * - `warn` for the range `[400-500[`: `WARNING`
   * - `error` for the range `[500-`: `ERROR`, `CRITICAL`, `ALERT` and `EMERGENCY`
   *
   * Note: `console.log` is not used by default
   */
  readonly severityMapping: ReadonlyArray<ConsoleSeverityRange>;
}
