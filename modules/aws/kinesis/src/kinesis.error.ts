import { createErrorType } from '@komore/error';

import { kinesisDomain } from './kinesis.domain';

/**
 * Kinesis error
 */
export const kinesisError = createErrorType(kinesisDomain, {});
