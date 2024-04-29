import { createErrorType, errorProperties } from '@komore/error';

import { pnpmDomain } from './pnpm.domain';

/**
 * pnpm command-line interface error
 */
export const pnpmCliError = createErrorType(pnpmDomain, {
  /**
   * pnpm not found
   */
  notFound: errorProperties(),
});
