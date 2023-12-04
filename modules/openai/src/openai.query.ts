import { createQueryType } from '@komore/query';

import { openAiDomain } from './openai.domain';

/**
 * OpenAI query
 */
export const openAiQuery = createQueryType(openAiDomain, {});
