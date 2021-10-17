/**
 * Write file options
 */
export interface WriteFileOptions {
  /**
   * The offset into the buffer/string from which the data to write starts
   */
  readonly dataOffset: number;
  /**
   * The offset from the beginning of the file where the data from the buffer should be written
   */
  readonly fileOffset: number;
  /**
   * The number of bytes to write from the buffer/string
   */
  readonly bytesCount: number;
}
