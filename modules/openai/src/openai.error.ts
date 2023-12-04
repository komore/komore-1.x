import { createErrorType } from '@komore/error';

import { openAiDomain } from './openai.domain';

/**
 * OpenAI error
 */
export const openAiError = createErrorType(openAiDomain, {});
