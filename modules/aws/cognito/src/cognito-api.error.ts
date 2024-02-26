import { createErrorType } from '@komore/error';

import { cognitoDomain } from './cognito.domain';

/**
 * Cognito API error
 */
export const cognitoApiError = createErrorType(cognitoDomain, {});
