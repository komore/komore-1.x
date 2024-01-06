import { type LogAppender } from '@komore/logging';

import { type NodeConsoleLogAppenderOptions } from './node-console-log-appender-options';

/**
 * Creates a Node console log appender
 *
 * @param appenderOptions Node console log appender options
 * @returns Node console log appender
 */
export function createNodeConsoleLogAppender(appenderOptions: NodeConsoleLogAppenderOptions): LogAppender {
  const { encoder, target = console } = appenderOptions;

  return logEventRecord => {
    console.log('ahem ahem', logEventRecord);
    const encodedLogEventRecord = encoder(logEventRecord);
    target.log(encodedLogEventRecord);
  };
}
