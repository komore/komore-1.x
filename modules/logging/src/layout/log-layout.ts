import { type MediaType } from '@komore/http';

import { type LogEventRecord } from '../record/log-event-record';

/**
 * Log layout
 */
export interface LogLayout {
  /**
   * Returns a string, given a log event record
   *
   * @param logEventRecord Log event record
   * @returns String
   */
  (logEventRecord: LogEventRecord): string;
  /**
   * Returns the log header, global to the entire logging operation
   *
   * @returns Log footer
   */
  readonly buildLogHeader?: () => string;
  /**
   * Returns the log footer, global to the entire logging operation
   *
   * @returns Log footer
   */
  readonly buildLogFooter?: () => string;
  /**
   * Media type
   */
  readonly mediaType: MediaType;
}
