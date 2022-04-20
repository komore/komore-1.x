import { type LogAppenderOptions } from '@komore/observability/logging';
import { type PathLike } from 'fs';

/**
 * Node file log appender options
 */
export interface NodeFileLogAppenderOptions extends LogAppenderOptions {
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
  /**
   * File mode
   *
   * TODO
   */
  readonly mode?: string | number;
}
