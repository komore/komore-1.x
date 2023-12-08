import { createErrorType } from '@komore/error';

import { squareDomain } from './square.domain';

/**
 * Square error
 */
export const squareError = createErrorType(squareDomain, {});
