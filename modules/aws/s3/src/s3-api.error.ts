import { createErrorType, errorProperties } from '@komore/error';

import { s3Domain } from './s3.domain';

/**
 * S3 API error
 */
export const s3ApiError = createErrorType(s3Domain, {
  /**
   * TODO
   */
  objectNotInActiveTier: errorProperties<{}>(), // TODO
  /**
   * Generic base S3 service exception
   *
   * @note {@link https://docs.aws.amazon.com/redshift/latest/dg/s3serviceexception-error.html S3ServiceException errors}
   */
  serviceException: errorProperties<{
    // TODO
    readonly message: string;
  }>(),
});
