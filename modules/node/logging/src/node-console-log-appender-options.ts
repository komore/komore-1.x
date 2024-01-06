import { type LogAppenderOptions } from '@komore/logging';

/**
 * Node console log appender options
 */
export interface NodeConsoleLogAppenderOptions extends LogAppenderOptions {
  /**
   * Target used to append logs
   */
  readonly target?: typeof console;
}
