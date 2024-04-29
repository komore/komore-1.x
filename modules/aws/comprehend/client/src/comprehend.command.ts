import { comprehendDomain } from '@komore/aws/comprehend';
import { createCommandType } from '@komore/command';

/**
 * Comprehend command
 */
export const comprehendCommand = createCommandType(comprehendDomain, {});
