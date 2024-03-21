import { snsDomain } from '@komore/aws/sns';
import { createErrorType } from '@komore/error';

/**
 * SNS error
 */
export const snsError = createErrorType(snsDomain, {});
