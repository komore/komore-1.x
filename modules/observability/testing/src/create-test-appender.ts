import { type UntypedLogEventRecord } from '@komore/observability/logging';
import { type TestAppender } from './test-appender';

/**
 * Creates a test appender
 */
export function createTestAppender<
  LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord
>(): TestAppender<LogEventRecordType> {
  // TODO:
  return undefined as unknown as TestAppender<LogEventRecordType>;
}
