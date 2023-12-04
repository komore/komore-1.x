import { createEventType } from '@komore/event';

import { openAiDomain } from './openai.domain';

/**
 * OpenAI event
 */
export const openAiEvent = createEventType(openAiDomain, {});
