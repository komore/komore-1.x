import { type Appender, type UntypedLogEventRecord } from '@komore/observability/logging';
import { type LocalStorageAppenderOptions } from './local-storage-appender-options';

export function createLocalStorageAppender(_options: LocalStorageAppenderOptions): Appender {
  return {
    next(_logEventRecord: UntypedLogEventRecord): void {
      // TODO
    }
  };
}
