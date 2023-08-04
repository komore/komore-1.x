import { type LogAppender } from '@komore/logging';

import { type NodeConsoleLogAppenderOptions } from './node-console-log-appender-options';

/**
 * Creates a Node console log appender
 *
 * @param options Node console log appender options
 * @returns Node console log appender
 */
export function createNodeConsoleLogAppender(options: NodeConsoleLogAppenderOptions): LogAppender {
  const { encoder, target = console } = options;

  return logEventRecord => {
    const encodedLogEventRecord = encoder(logEventRecord);
    target.log(encodedLogEventRecord);
  };
}
