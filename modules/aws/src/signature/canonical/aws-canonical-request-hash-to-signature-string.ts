import { dateTimeToAwsDateTimeStamp } from '../../date-time/date-time-to-aws-date-timestamp';
import { dateToAwsSignatureCredentialDate } from '../../date-time/date-to-aws-signature-credential-date';
import { type AwsCanonicalRequestHashToSignatureStringOptions } from './aws-canonical-request-hash-to-signature-string-options';
import { type AwsCanonicalRequestHashToSignatureStringParameters } from './aws-canonical-request-hash-to-signature-string-parameters';

/**
 * Creates a function that returns a signature string, given an AWS canonical request hash
 *
 * @param options Signature string options
 * @returns Function that returns a signature string, given an AWS canonical request hash
 * @see {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/create-signed-request.html#create-string-to-sign Step 3: Create a string to sign}
 * @private
 */
export function awsCanonicalRequestHashToSignatureString(
  options: AwsCanonicalRequestHashToSignatureStringOptions
): (parameters: AwsCanonicalRequestHashToSignatureStringParameters) => string {
  const { algorithm, service } = options;

  return ({ canonicalRequestHash, dateTime, region }) => {
    const requestDateTime = dateTimeToAwsDateTimeStamp(dateTime);
    const credentialDate = dateToAwsSignatureCredentialDate(dateTime.toPlainDate());
    const credentialScope = `${credentialDate}/${region}/${service}/aws4_request`;
    return [algorithm, requestDateTime, credentialScope, canonicalRequestHash].join('\n');
  };
}
