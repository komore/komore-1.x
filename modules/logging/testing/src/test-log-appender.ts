import { type LogAppender, type UntypedLogEventRecord } from '@komore/logging';

/**
 * Test log appender
 *
 * @template LogEventRecordType Log event record type
 */
export interface TestLogAppender<LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord>
  extends LogAppender<LogEventRecordType> {
  readonly records: ReadonlyArray<LogEventRecordType>;

  /**
   * Clears received log event records
   */
  clear(): void;
}
