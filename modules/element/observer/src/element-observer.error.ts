import { createErrorType, errorProperties } from '@komore/error';

import { elementObserverDomain } from './element-observer.domain';

/**
 * Element observer error
 */
export const elementObserverError = createErrorType(elementObserverDomain, {
  intersectionObserverNotSupported: errorProperties(),
  mutationObserverNotSupported: errorProperties(),
  resizeObserverNotSupported: errorProperties(),
});
