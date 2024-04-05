import { map } from '@komore/reactive';

import { type AwsCanonicalRequest } from './aws-canonical-request';
import { awsCanonicalRequestToString } from './aws-canonical-request-to-string';

/**
 * Creates a function that returns an AWS canonical request with its hashed version
 *
 * @param hash Hash function
 * @returns Function that returns an AWS canonical request with its hashed version
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/create-signed-request.html#create-canonical-request-hash Step 2. Create a hash of the canonical request}
 * @private
 */
export function awsCanonicalRequestWithHash(
  hash: (value: string) => Observable<string>
): (
  canonicalRequest: AwsCanonicalRequest
) => Observable<readonly [canonicalRequest: AwsCanonicalRequest, hashedCanonicalRequest: string]> {
  return canonicalRequest => {
    const canonicalRequestString = awsCanonicalRequestToString(canonicalRequest);
    return hash(canonicalRequestString).pipe(map(hashedCanonicalRequest => [canonicalRequest, hashedCanonicalRequest]));
  };
}
