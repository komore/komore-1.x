import { type PathLike } from 'node:fs';

import { type LogAppenderOptions } from '@komore/logging';

/**
 * Node file log appender options
 */
export interface NodeFileLogAppenderOptions extends LogAppenderOptions {
  /**
   * Encoding
   */
  readonly encoding: 'utf-8';
  /**
   * File mode
   *
   * TODO
   */
  readonly mode?: number;
  /**
   * File path
   */
  readonly path: PathLike;
  /**
   * Truncate
   *
   * Indicates whether the target file should be truncated or not:
   *
   * - `true`: truncate the file, effectively erasing any prior recorded log events
   * - `false`: append at the end of the file, keeping any prior recorded log events
   *
   * By default, new log events are recorded at the end of the file
   */
  readonly truncate?: boolean;
}
