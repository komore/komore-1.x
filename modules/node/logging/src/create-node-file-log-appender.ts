import { type LogAppender } from '@komore/logging';

import { type NodeFileLogAppenderOptions } from './node-file-log-appender-options';

/**
 * Creates a Node file log appender
 *
 * @param appenderOptions Node file log appender options
 * @returns Node file log appender
 */
export function createNodeFileLogAppender(_options: NodeFileLogAppenderOptions): LogAppender {
  return logEventRecord => {
    console.log('TODO: file appender', logEventRecord);
  };
}
