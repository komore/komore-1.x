import { createErrorType, errorProperties } from '@komore/error';

import { s3Domain } from './s3.domain';

/**
 * S3 error
 */
export const s3Error = createErrorType(s3Domain, {
  /**
   * TODO
   */
  objectNotInActiveTier: errorProperties<{}>(), // TODO
  /**
   * Generic base S3 service exception
   *
   * @note {@link https://docs.aws.amazon.com/redshift/latest/dg/s3serviceexception-error.html S3ServiceException errors}
   */
  serviceException: errorProperties<{ message: string }>(), // TODO
});
