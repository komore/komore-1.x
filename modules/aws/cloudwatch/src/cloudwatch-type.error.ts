import { createErrorType } from '@komore/error';

import { cloudWatchDomain } from './cloudwatch.domain';

/**
 * CloudWatch type error
 */
export const cloudWatchTypeError = createErrorType(cloudWatchDomain, {});
