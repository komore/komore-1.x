import { createEventType } from '@komore/event';
import { openAiDomain } from '@komore/openai';

/**
 * OpenAI event
 */
export const openAiEvent = createEventType(openAiDomain, {});
