import { isUUID } from './is-uuid';
import { type UUID } from './uuid';
import { uuidError } from './uuid.error';

/**
 * Validates that a value is a UUID
 *
 * @param value Value
 */
export function validateUUID(value: unknown): asserts value is UUID {
  if (!isUUID(value)) {
    throw uuidError('uuid.invalid', { value });
  }
}
