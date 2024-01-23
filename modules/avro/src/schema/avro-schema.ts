import { type Observable } from '@komore/reactive';

/**
 * Avro schema
 */
export interface AvroSchema<T> {
  /**
   * Encodes a value according to the schema
   *
   * @param value Value to encode
   * @returns Encoded value
   */
  valueToBuffer(value: T): Observable<Buffer>;
}
