import { type LogAppenderOptions } from '@komore/observability/logging';

/**
 * Node console log appender options
 */
export interface NodeConsoleLogAppenderOptions extends LogAppenderOptions {
  readonly target?: typeof console;
}
