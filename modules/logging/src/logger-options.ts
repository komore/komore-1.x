import { type LogAppender } from './appender/log-appender';

/**
 * Logger options
 */
export interface LoggerOptions {
  /**
   * Appenders
   */
  readonly appenders?: ReadonlyArray<LogAppender>;
}
