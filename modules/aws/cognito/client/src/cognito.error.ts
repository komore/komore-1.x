import { createErrorType } from '@komore/error';

import { cognitoDomain } from './cognito.domain';

/**
 * Cognito error
 */
export const cognitoError = createErrorType(cognitoDomain, {});
