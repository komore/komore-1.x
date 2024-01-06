import { createCommandType } from '@komore/command';

import { cognitoDomain } from './cognito.domain';

/**
 * Cognito command
 */
export const cognitoCommand = createCommandType(cognitoDomain, {});
