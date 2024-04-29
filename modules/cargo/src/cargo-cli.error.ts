import { createErrorType, errorProperties } from '@komore/error';

import { cargoDomain } from './cargo.domain';

/**
 * Cargo error
 */
export const cargoCliError = createErrorType(cargoDomain, {
  /**
   * Cargo was not found
   */
  notFound: errorProperties<{ basePath: string }>(),
  /**
   * Unhandled error
   */
  unhandledError: errorProperties<{ errorString: string }>(),
});
