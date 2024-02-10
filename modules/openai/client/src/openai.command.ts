import { createCommandType } from '@komore/command';
import { openAiDomain } from '@komore/openai';

/**
 * OpenAI command
 */
export const openAiCommand = createCommandType(openAiDomain, {});
