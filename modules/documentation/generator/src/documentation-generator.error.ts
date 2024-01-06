import { createErrorType, errorProperties } from '@komore/error';

import { documentationGeneratorDomain } from './documentation-generator.domain';

/**
 * Documentation generator error
 */
export const documentationGeneratorError = createErrorType(documentationGeneratorDomain, {
  noFunctionDocumentation: errorProperties<{ functionName: string }>(),
});
