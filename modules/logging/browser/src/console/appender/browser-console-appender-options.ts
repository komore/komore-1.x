import { type BrowserConsoleSeverityRange } from '../severity/browser-console-severity-range';

/**
 * Browser console appender options
 */
export interface BrowserConsoleAppenderOptions {
  /**
   * Severity mapping
   *
   * List of severity ranges that determine which console method is used to print a log event record.
   *
   * By default, the following `LogEventSeverity` mapping is used:
   * - `debug` for the range `[0-200[`: `DEBUG`
   * - `info` for the range `[200-400[`: `INFO`, `NOTICE`
   * - `warn` for the range `[400-500[`: `WARNING`
   * - `error` for the range `[500-`: `ERROR`, `CRITICAL`, `ALERT` and `EMERGENCY`
   *
   * Note: `console.log` is not used by default
   */
  readonly severityMapping: ReadonlyArray<BrowserConsoleSeverityRange>;
}
