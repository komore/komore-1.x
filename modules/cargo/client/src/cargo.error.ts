import { cargoDomain } from '@komore/cargo';
import { createErrorType, errorProperties } from '@komore/error';

/**
 * Cargo error
 */
export const cargoError = createErrorType(cargoDomain, {
  /**
   * Cargo was not found
   */
  notFound: errorProperties<{ basePath: string }>(),
  /**
   * Unhandled error
   */
  unhandledError: errorProperties<{ errorString: string }>(),
});
