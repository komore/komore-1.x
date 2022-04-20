import { type LogAppender } from '@komore/observability/logging';
import { type NodeFileLogAppenderOptions } from './node-file-log-appender-options';

export function createNodeFileLogAppender(_options: NodeFileLogAppenderOptions): LogAppender {
  return logEventRecord => {
    console.log('TODO: file appender', logEventRecord);
  };
}
