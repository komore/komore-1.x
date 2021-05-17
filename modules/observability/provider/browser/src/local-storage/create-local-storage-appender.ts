import type { Appender, UntypedLogEventRecord } from '@komore/observability/logging';

export function createLocalStorageAppender(options: LocalStorageAppenderOptions): Appender {
  return {
    next(logEventRecord: UntypedLogEventRecord): void {
      
    }
  };
}
