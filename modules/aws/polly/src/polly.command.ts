import { createAwsCommandType } from '@komore/aws';

import { pollyDomain } from './polly.domain';

/**
 * Polly command
 */
export const pollyCommand = createAwsCommandType(pollyDomain, {});
