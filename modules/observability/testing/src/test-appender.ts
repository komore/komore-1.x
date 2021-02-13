import type { Appender, UntypedLogEventRecord } from '@komore/observability/logging';

/**
 * Test appender
 * @template LogEventRecordType Log event record type
 */
export interface TestAppender<LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord>
  extends Appender<LogEventRecordType> {
  readonly records: ReadonlyArray<LogEventRecordType>;

  /**
   * Clears received log event records
   */
  clear(): void;
}
