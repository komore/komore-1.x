import { type Uint8ArrayToStringOptions } from './uint8-array-to-string-options';

/**
 * Creates a function that returns a string representation of a uint8 array
 *
 * @param options Options
 * @returns Function that returns a string representation of a uint8 array
 */
export function uint8ArrayToString(_options: Uint8ArrayToStringOptions): (array: Uint8Array) => string {
  return array => {
    const bytes = Array.from(array);
    return bytes.map(byte => byte.toString(16).padStart(2, '0')).join('');
  };
}
