import { createErrorType } from '@komore/error';

import { kinesisDomain } from './kinesis.domain';

/**
 * Kinesis type error
 */
export const kinesisTypeError = createErrorType(kinesisDomain, {});
