import { type GenericErrorType } from './generic-error-type';
import { KomoreError } from './komore-error';

/**
 * Tests whether a value is a komore error
 *
 * @param value Value
 * @returns true if the value is an error
 * @private
 */
export function isKomoreError(value: unknown): value is GenericErrorType {
  return value instanceof KomoreError;
}
