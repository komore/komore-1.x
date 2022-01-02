import { type Appender, type UntypedLogEventRecord } from '@komore/observability/logging';
import { open } from 'fs';
import { type NodeFileAppenderOptions } from './node-file-appender-options';

export function createNodeFileAppender(options: NodeFileAppenderOptions): Appender {
  // TODO: file subject
  new FileSubject()
  open(options.path, flags,

  return {
    next(logEventRecord) {

    }
  };
}
