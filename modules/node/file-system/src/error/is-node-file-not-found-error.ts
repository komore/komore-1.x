import { isErrnoException } from '@komore/node';

/**
 * Returns true if an error is a Node file not found error
 *
 * @param error Error
 * @returns true if the error is a Node file not found error
 * @private
 */
export function isNodeFileNotFoundError(error: unknown): error is NodeJS.ErrnoException {
  return isErrnoException(error) && error.code === 'ENOENT';
}
