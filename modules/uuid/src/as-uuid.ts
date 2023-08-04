import { type UUID } from './uuid';
import { validateUUID } from './validate-uuid';

/**
 * Returns a value as a UUID
 *
 * @param value Value
 * @returns UUID
 */
export function asUUID(value: unknown): UUID {
  validateUUID(value);
  return value;
}
