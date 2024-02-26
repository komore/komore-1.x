import { createErrorType } from '@komore/error';

import { kinesisDomain } from './kinesis.domain';

/**
 * Kinesis API error
 */
export const kinesisApiError = createErrorType(kinesisDomain, {});
