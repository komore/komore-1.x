import { createErrorType, errorProperties } from '@komore/error';

import { openTofuDomain } from './opentofu.domain';

/**
 * OpenTofu type error
 */
export const openTofuTypeError = createErrorType(openTofuDomain, {});
