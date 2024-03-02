import { deferPromise, map } from '@komore/reactive';

import { uint8ArrayToString } from '../array/uint8-array-to-string';
import { type HashOptions } from './hash-options';

/**
 * Creates a function that computes a hash from a value
 *
 * @param hashOptions Hash options
 * @returns Function that computes a hash from a value
 */
export function createHash(hashOptions: HashOptions): (value: string) => Observable<string> {
  const { hashAlgorithm } = hashOptions;
  return value =>
    deferPromise(() => crypto.subtle.digest(hashAlgorithm, new TextEncoder().encode(value))).pipe(
      map(buffer => new Uint8Array(buffer)),
      map(uint8ArrayToString({ encoding: 'hex' }))
    );
}
