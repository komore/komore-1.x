import { createErrorType, errorProperties } from '@komore/error';

import { type UnmetExpectationDescription } from './expect/unmet-expectation-description';
import { testingDomain } from './testing.domain';

/**
 * Testing error
 */
export const testingError = createErrorType(testingDomain, {
  /**
   * The specification was not preprocessed
   */
  specificationNotPreprocessed: errorProperties<{ readonly expression: string }>(),
  /**
   * An expectation was not met
   */
  unmetExpectation: errorProperties<UnmetExpectationDescription>(),
});
