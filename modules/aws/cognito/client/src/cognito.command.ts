import { createCommandType } from '@komore/command';

import { cognitoDomain } from '@komore/aws/cognito';

/**
 * Cognito command
 */
export const cognitoCommand = createCommandType(cognitoDomain, {});
