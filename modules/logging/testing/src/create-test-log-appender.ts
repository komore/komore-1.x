import { type UntypedLogEventRecord } from '@komore/logging';

import { type TestLogAppender } from './test-log-appender';

/**
 * Creates a test log appender
 */
export function createTestLogAppender<
  LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord,
>(): TestLogAppender<LogEventRecordType> {
  // TODO:
  return undefined as unknown as TestLogAppender<LogEventRecordType>;
}
