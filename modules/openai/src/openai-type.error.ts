import { createErrorType } from '@komore/error';

import { openAiDomain } from './openai.domain';

/**
 * OpenAI type error
 */
export const openAiTypeError = createErrorType(openAiDomain, {});
