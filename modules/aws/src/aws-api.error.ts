import { createErrorType } from '@komore/error';

import { awsDomain } from './aws.domain';

/**
 * AWS API error
 */
export const awsApiError = createErrorType(awsDomain, {});
