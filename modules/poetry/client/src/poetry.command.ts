import { createCommandType } from '@komore/command';
import { poetryDomain } from '@komore/poetry';

/**
 * Poetry command
 */
export const poetryCommand = createCommandType(poetryDomain, {});
