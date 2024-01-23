import { createCommandType } from '@komore/command';

import { eToroDomain } from './etoro.domain';

/**
 * eToro command
 */
export const eToroCommand = createCommandType(eToroDomain, {});
