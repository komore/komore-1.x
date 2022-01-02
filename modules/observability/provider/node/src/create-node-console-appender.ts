import { type Appender } from '@komore/observability/logging';
import { type NodeConsoleAppenderOptions } from './node-console-appender-options';

/**
 * Creates a Node console appender
 * @param options Node console appender options
 * @returns Node console appender
 */
export function createNodeConsoleAppender(options?: NodeConsoleAppenderOptions): Appender {
  const target = options?.target ?? console;

  return {
    next(logEventRecord) {
      target.log(logEventRecord);
    }
  };
}
