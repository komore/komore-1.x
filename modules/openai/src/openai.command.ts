import { createCommandType } from '@komore/command';

import { openAiDomain } from './openai.domain';

/**
 * OpenAI command
 */
export const openAiCommand = createCommandType(openAiDomain, {});
