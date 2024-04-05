import { type AwsCanonicalRequest } from './aws-canonical-request';

/**
 * Returns a string representation of a AWS canonical request
 *
 * @param canonicalRequest AWS canonical request
 * @returns AWS canonical request string
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/create-signed-request.html#create-canonical-request Step 1: Create a canonical request}
 * @private
 */
export function awsCanonicalRequestToString(canonicalRequest: AwsCanonicalRequest): string {
  const { httpMethod, canonicalUri, canonicalQueryString, canonicalHeaders, signedHeaders, hashedPayload } =
    canonicalRequest;
  return [httpMethod, canonicalUri, canonicalQueryString, canonicalHeaders, '', signedHeaders, hashedPayload].join(
    '\n'
  );
}
