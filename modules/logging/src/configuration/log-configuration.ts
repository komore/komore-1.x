import { type LogAppender } from '../appender/log-appender';

/**
 * Log configuration
 */
export interface LogConfiguration {
  /**
   * Appenders
   */
  readonly appenders: ReadonlyMap<string, LogAppender>;
}
