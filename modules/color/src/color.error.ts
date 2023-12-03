import { createErrorType, errorProperties } from '@komore/error';

import { colorDomain } from './color.domain';

/**
 * Color error
 */
export const colorError = createErrorType(colorDomain, {
  /**
   * Invalid hexadecimal color string
   */
  invalidHexColorString: errorProperties<{ hexColorString: string }>(),
});
