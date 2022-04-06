import { Fn } from 'cdktf';

/**
 * Computes the SHA-1 of a string
 *
 * @param value String
 * @returns SHA-1
 */
export function computeSha1(value: string): string {
  return Fn.sha1(value);
}
