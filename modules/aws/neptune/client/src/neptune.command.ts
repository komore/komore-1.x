import { neptuneDomain } from '@komore/aws/neptune';
import { createCommandType } from '@komore/command';

/**
 * Neptune command
 */
export const neptuneCommand = createCommandType(neptuneDomain, {});
