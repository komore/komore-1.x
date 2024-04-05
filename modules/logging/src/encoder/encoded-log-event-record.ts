/**
 * Encoded log event record
 */
export interface EncodedLogEventRecord {
  /**
   * Buffer
   */
  readonly buffer: Uint8Array;
  /**
   * Encoidng
   */
  readonly encoding: 'utf-8';
}
