import { type InternalEsLintError } from './internal-eslint-error';
import { type InternalEsLintErrorDataTypes } from './internal-eslint-error-data-types';

/**
 * Tests whether an error is an internal ESLint error
 *
 * @param error Error
 * @returns true if the error is an internal ESLint error
 */
export function isInternalEsLintError(
  error: unknown
): error is InternalEsLintError<keyof InternalEsLintErrorDataTypes> {
  return error instanceof Error && 'messageTemplate' in error;
}
