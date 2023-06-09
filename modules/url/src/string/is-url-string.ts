import { type UrlString } from './url-string';

/**
 * Tests whether a value is a valid URL string
 *
 * @param value Value
 * @returns true if the string is a valid URL string
 */
export function isUrlString(value: unknown): value is UrlString {
  if (typeof value !== 'string') {
    return false;
  }

  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}
