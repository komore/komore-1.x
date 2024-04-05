import { type WriteStream } from 'node:fs';

import { type LogAppenderOptions } from '@komore/logging';

/**
 * Node write stream log appender options
 */
export interface NodeWriteStreamLogAppenderOptions extends LogAppenderOptions {
  /**
   * Write stream
   */
  readonly writeStream: WriteStream | NodeJS.WriteStream;
}
