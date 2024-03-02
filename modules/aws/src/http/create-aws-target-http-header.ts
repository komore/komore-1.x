import { type HttpHeader } from '@komore/http';

/**
 * Returns an x-amz-target HTTP header, given a target
 *
 * @param target Target
 * @returns x-amz-target HTTP header
 */
export function createAwsTargetHttpHeader(target: string): HttpHeader {
  const headerName = 'x-amz-target';
  return [headerName, target];
}
