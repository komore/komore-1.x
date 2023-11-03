import { createAwsCommandType } from '@komore/aws';

import { neptuneDomain } from './neptune.domain';

/**
 * Neptune command
 */
export const neptuneCommand = createAwsCommandType(neptuneDomain, {});
