import { createHash } from '@komore/cryptography';
import { type HttpHeader } from '@komore/http';
import { map, mergeMap } from '@komore/reactive';

import { createAwsSignatureAuthorizationHttpHeader } from '../http/create-aws-signature-authorization-http-header';
import { awsCanonicalRequestWithHash } from './hash/aws-canonical-request-with-hash';
import { httpClientRequestToAwsCanonicalRequest } from './http-client-request-to-aws-canonical-request';
import { type HttpClientRequestToAwsSignatureAuthorizationHttpHeaderOptions } from './http-client-request-to-aws-signature-authorization-http-header-options';
import { type HttpClientRequestToAwsSignatureAuthorizationHttpHeaderParameters } from './http-client-request-to-aws-signature-authorization-http-header-parameters';
import { awsCanonicalRequestHashToSignatureString } from './sign/aws-canonical-request-hash-to-signature-string';
import { awsSignatureStringToSignature } from './sign/aws-signature-string-to-signature';

/**
 * Creates a function that returns an AWS signature authorization HTTP header signature, given an HTTP client request
 *
 * @param credentials Credentials
 * @param awsRegion AWS region
 * @param awsService AWS service
 * @returns Function that returns an AWS signature authorization HTTP header
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/create-signed-request.html#create-canonical-request Create a signed AWS API request}
 * @private
 */
export function httpClientRequestToAwsSignatureAuthorizationHttpHeader(
  options: HttpClientRequestToAwsSignatureAuthorizationHttpHeaderOptions
): (parameters: HttpClientRequestToAwsSignatureAuthorizationHttpHeaderParameters) => Observable<HttpHeader> {
  const { credentials, region, service } = options;
  const { accessKeyId, secretAccessKey } = credentials;
  const hashAlgorithm = 'SHA-256';
  const algorithm = 'AWS4-HMAC-SHA256';
  const hash = createHash({ hashAlgorithm });
  const toSignatureString = awsCanonicalRequestHashToSignatureString({ algorithm, region, service });
  const toSignature = awsSignatureStringToSignature({ hashAlgorithm, secretAccessKey, region, service });
  const toCanonicalRequest = httpClientRequestToAwsCanonicalRequest(hash);

  return ({ dateTime, httpClientRequest }) => {
    const date = dateTime.toPlainDate();
    return toCanonicalRequest(httpClientRequest).pipe(
      mergeMap(awsCanonicalRequestWithHash(hash)),
      mergeMap(([canonicalRequest, canonicalRequestHash]) => {
        const { signedHeaderNames: signedHeaders } = canonicalRequest;
        const signatureString = toSignatureString({ canonicalRequestHash, dateTime });
        return toSignature({ signatureString, date }).pipe(
          map(signature => {
            return createAwsSignatureAuthorizationHttpHeader({
              credential: { accessKeyId, region, date, service },
              signature,
              signedHeaders,
            });
          })
        );
      })
    );
  };
}
