import { type HttpHeader } from '@komore/http';

import { dateTimeToAwsDateTimeStamp } from '../date-time/date-time-to-aws-date-timestamp';

/**
 * Returns an x-amz-date HTTP header, given a plain date time
 *
 * @param dateTime Date time
 * @returns x-amz-date HTTP header
 */
export function createAwsDateHttpHeader(dateTime: Temporal.PlainDateTime): HttpHeader {
  const headerName = 'x-amz-date';
  const headerValue = dateTimeToAwsDateTimeStamp(dateTime);
  return [headerName, headerValue];
}
