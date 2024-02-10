import { openAiDomain } from '@komore/openai';
import { createQueryType } from '@komore/query';

/**
 * OpenAI query
 */
export const openAiQuery = createQueryType(openAiDomain, {});
