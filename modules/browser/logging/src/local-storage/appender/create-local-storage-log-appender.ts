import { type LogAppender } from '@komore/logging';

import { type LocalStorageLogAppenderOptions } from './local-storage-log-appender-options';

/**
 * Creates a local storage log appender
 *
 * @param appenderOptions Local storage log appender options
 * @returns Local storage log appender
 */
export function createLocalStorageLogAppender(_appenderOptions: LocalStorageLogAppenderOptions): LogAppender {
  return logEventRecord => {
    // TODO
    console.log('TODO: local storage log appender', logEventRecord);
  };
}
