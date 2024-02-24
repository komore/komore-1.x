import { createErrorType } from '@komore/error';

import { s3Domain } from './s3.domain';

/**
 * S3 type error
 */
export const s3TypeError = createErrorType(s3Domain, {});
