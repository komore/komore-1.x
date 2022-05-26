import { type UUID } from './uuid';

/**
 * Returns an UUID v4 string
 *
 * @returns UUID v4 string
 */
export function randomUUID(): UUID {
  return crypto.randomUUID() as UUID;
}
