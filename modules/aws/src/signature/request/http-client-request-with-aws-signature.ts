import { createHash } from '@komore/cryptography';
import { type HttpClientRequest } from '@komore/http/client';
import { map, mergeMap } from '@komore/reactive';
import { urlWithSearchParams } from '@komore/url';

import { awsCanonicalRequestHashToSignatureString } from '../canonical/aws-canonical-request-hash-to-signature-string';
import { awsCanonicalRequestWithHash } from '../canonical/aws-canonical-request-with-hash';
import { httpClientRequestToAwsCanonicalRequest } from '../canonical/http-client-request-to-aws-canonical-request';
import { awsSignatureStringToSignature } from '../string/aws-signature-string-to-signature';
import { type HttpClientRequestWithAwsSignatureOptions } from './http-client-request-with-aws-signature-options';
import { type HttpClientRequestWithAwsSignatureParameters } from './http-client-request-with-aws-signature-parameters';

/**
 * Creates a function that adds an AWS signature to an HTTP client request
 *
 * @param options Options
 * @returns Function that adds an AWS signature to an HTTP client request
 */
export function httpClientRequestWithAwsSignature(
  options: HttpClientRequestWithAwsSignatureOptions
): (parameters: HttpClientRequestWithAwsSignatureParameters) => Observable<HttpClientRequest> {
  const { algorithm, credentials, hashAlgorithm, service, strategy } = options;
  const { secretAccessKey } = credentials;
  const hash = createHash({ hashAlgorithm });
  const toSignatureString = awsCanonicalRequestHashToSignatureString({ algorithm, service });
  const toSignature = awsSignatureStringToSignature({ hashAlgorithm, secretAccessKey, service });
  const toCanonicalRequest = httpClientRequestToAwsCanonicalRequest(hash);

  return ({ dateTime, httpClientRequest, region }) => {
    const date = dateTime.toPlainDate();

    return toCanonicalRequest(httpClientRequest).pipe(
      mergeMap(awsCanonicalRequestWithHash(hash)),
      mergeMap(([canonicalRequest, canonicalRequestHash]) => {
        const { signedHeaderNames: signedHeaders } = canonicalRequest;
        const signatureString = toSignatureString({ canonicalRequestHash, dateTime, region });
        return toSignature({ date, region, signatureString }).pipe(
          map(signature => {
            const { headers: additionalHeaders = [], queryParameters: additionalQueryParameters } = strategy({
              algorithm,
              credentials,
              dateTime,
              region,
              service,
              signature: {
                algorithm,
                signature,
                signedHeaders,
              },
            });

            if (additionalHeaders.length === 0 && additionalQueryParameters === undefined) {
              return httpClientRequest;
            }

            return {
              ...httpClientRequest,
              ...(additionalHeaders.length > 0
                ? { headers: [...(httpClientRequest.headers ?? []), ...additionalHeaders] }
                : {}),
              ...(additionalQueryParameters !== undefined
                ? { url: urlWithSearchParams(additionalQueryParameters)(httpClientRequest.url) }
                : {}),
            };
          })
        );
      })
    );
  };
}
