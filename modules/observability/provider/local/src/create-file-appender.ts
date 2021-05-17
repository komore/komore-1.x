import type { Appender, UntypedLogEventRecord } from '@komore/observability/logging';
import { open } from 'fs';
import type { FileAppenderOptions } from './file-appender-options';
import { CompletionObserver, Observer, PartialObserver } from 'rxjs';

export function createFileAppender(options: FileAppenderOptions): Appender {
  // TODO: file subject
  new FileSubject()
  open(options.path, flags,

  return {
    next(logEventRecord) {

    }
  };
}
