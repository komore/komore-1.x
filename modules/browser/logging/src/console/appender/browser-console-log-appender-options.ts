import { type LogAppenderOptions } from '@komore/logging';

import { type BrowserConsoleSeverityRange } from '../severity/browser-console-severity-range';

/**
 * Browser console log appender options
 */
export interface BrowserConsoleLogAppenderOptions extends LogAppenderOptions {
  /**
   * Severity mapping
   */
  readonly severityMapping: ReadonlyArray<BrowserConsoleSeverityRange>;
  /**
   * Target used to append logs
   */
  readonly target?: typeof console;
}
