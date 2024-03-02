import { createErrorType } from '@komore/error';

import { cloudFunctionsDomain } from './cloud-functions.domain';

/**
 * Cloud Functions API error
 */
export const cloudFunctionsApiError = createErrorType(cloudFunctionsDomain, {});
