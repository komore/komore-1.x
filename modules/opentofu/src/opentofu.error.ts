import { createErrorType, errorProperties } from '@komore/error';

import { openTofuDomain } from './opentofu.domain';

/**
 * OpenTofu error
 */
export const openTofuError = createErrorType(openTofuDomain, {
  notFound: errorProperties(),
});
