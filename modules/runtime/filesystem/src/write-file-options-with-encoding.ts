import type { WriteFileOptions } from './write-file-options';

/**
 * Write file options with encoding
 */
export interface WriteFileOptionsWithEncoding extends WriteFileOptions {
  /**
   * The encoding to use for text data
   */
  readonly encoding: BufferEncoding;
}
