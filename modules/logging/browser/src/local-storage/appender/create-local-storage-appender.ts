import { type LogAppender } from '@komore/observability/logging';

import { type LocalStorageAppenderOptions } from './local-storage-appender-options';

export function createLocalStorageAppender(_options: LocalStorageAppenderOptions): LogAppender {
  return _logEventRecord => {
    // TODO
  };
}
