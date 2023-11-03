import { type GenericErrorInstance } from './generic-error-instance';
import { KomoreError } from './komore-error';

/**
 * Tests whether a value is a komore error
 *
 * @param value Value
 * @returns true if the value is an error
 * @private
 */
export function isKomoreError(value: unknown): value is GenericErrorInstance {
  return value instanceof KomoreError;
}
