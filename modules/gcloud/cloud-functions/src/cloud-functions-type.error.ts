import { createErrorType } from '@komore/error';

import { cloudFunctionsDomain } from './cloud-functions.domain';

/**
 * Cloud Functions type error
 */
export const cloudFunctionsTypeError = createErrorType(cloudFunctionsDomain, {});
