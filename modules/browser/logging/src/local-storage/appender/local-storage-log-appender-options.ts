import { type LogEventRecord } from '@komore/logging';

/**
 * Local storage log appender options
 */
export interface LocalStorageLogAppenderOptions {
  /**
   * Key
   *
   * Key to use when storing logs, either as a static string or as function called for each log event record.
   *
   * When the key option is not provided, the `komore-logging-YYYYMMDD` pattern is used where the date refers to the log
   * event timestamp.
   */
  readonly key?: string | ((logEventRecord: LogEventRecord) => string);
  /**
   * Maximum size per key
   *
   * Once the maximum size is reached, logging is rolled over to another key using an incrementing `.N` suffix.
   */
  readonly maximumSize?: number;
}
