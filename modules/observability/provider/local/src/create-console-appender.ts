import { type Appender } from '@komore/observability/logging';
import { type ConsoleAppenderOptions } from './console-appender-options';

/**
 * Creates a console appender
 * @param options Console appender options
 * @returns Console appender
 */
export function createConsoleAppender(options?: ConsoleAppenderOptions): Appender {
  const target = options?.target ?? console;

  return {
    next(logEventRecord) {
      target.log(logEventRecord);
    }
  };
}
