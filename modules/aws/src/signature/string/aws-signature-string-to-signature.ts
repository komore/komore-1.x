import { createHmac, uint8ArrayToString } from '@komore/cryptography';
import { map, mergeMap } from '@komore/reactive';

import { dateToAwsSignatureCredentialDate } from '../../date-time/date-to-aws-signature-credential-date';
import { type AwsSignatureStringToSignatureOptions } from './aws-signature-string-to-signature-options';
import { type AwsSignatureStringToSignatureParameters } from './aws-signature-string-to-signature-parameters';

/**
 * Creates a function that returns an signature, given an AWS signature string
 *
 * @param signatureOptions Signature options
 * @returns Function that returns a signature, given an AWS signature string
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/create-signed-request.html#calculate-signature Step 4: Calculate the signature}
 * @private
 */
export function awsSignatureStringToSignature(
  signatureOptions: AwsSignatureStringToSignatureOptions
): (parameters: AwsSignatureStringToSignatureParameters) => Observable<string> {
  const { hashAlgorithm, secretAccessKey, service } = signatureOptions;
  const arrayToString = uint8ArrayToString({ encoding: 'hex' });
  const hmac = (key: string | Uint8Array, value: string) => createHmac({ hashAlgorithm, key })(value);
  return ({ date, region, signatureString }) => {
    const dateString = dateToAwsSignatureCredentialDate(date);
    return createHmac({ hashAlgorithm, key: `AWS4${secretAccessKey}` })(dateString).pipe(
      mergeMap(key => hmac(key, region)),
      mergeMap(key => hmac(key, service)),
      mergeMap(key => hmac(key, 'aws4_request')),
      mergeMap(key => hmac(key, signatureString)),
      map(arrayToString)
    );
  };
}
