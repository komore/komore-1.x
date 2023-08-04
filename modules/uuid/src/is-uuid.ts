import { type UUID } from './uuid';

/**
 * Returns true if a value is a UUID
 *
 * @param value Value
 * @returns true if the value is a UUID
 */
export function isUUID(value: unknown): value is UUID {
  // TODO: stronger check
  return typeof value === 'string' && value.length === 36;
}
