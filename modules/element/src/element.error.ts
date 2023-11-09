import { createErrorType, errorProperties } from '@komore/error';

import { elementDomain } from './element.domain';

/**
 * Element error
 */
export const elementError = createErrorType(elementDomain, {
  /**
   * The browser could not switch to fullscreen mode
   */
  fullscreenError: errorProperties<{ element: Element }>(),
});
