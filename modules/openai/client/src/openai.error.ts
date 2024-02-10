import { createErrorType } from '@komore/error';
import { openAiDomain } from '@komore/openai';

/**
 * OpenAI error
 */
export const openAiError = createErrorType(openAiDomain, {});
