import { isString } from '@komore/string';

/**
 * Tests whether an error is a Node errno exception
 *
 * @param error Error
 * @returns true if the error is a Node errno exception
 */
export function isErrnoException(error: unknown): error is NodeJS.ErrnoException {
  return (
    (typeof error === 'object' &&
      error &&
      (('errno' in error && typeof error.errno === 'number') ||
        ('code' in error && isString(error.code)) ||
        ('syscall' in error && isString(error.syscall)))) ||
    false
  );
}
