import { createErrorType } from '@komore/error';

import { cognitoDomain } from './cognito.domain';

/**
 * Cognito type error
 */
export const cognitoTypeError = createErrorType(cognitoDomain, {});
