import { dateToAwsSignatureCredentialDate } from '../../date-time/date-to-aws-signature-credential-date';
import { type AwsSignatureCredentialStringParameters } from './aws-signature-credential-string-parameters';

/**
 * Returns a formatted string containing a signature's credentials
 *
 * @param parameters Credentials information
 * @returns Formatted string
 * @private
 */
export function buildAwsSignatureCredentialString(credential: AwsSignatureCredentialStringParameters): string {
  const date = dateToAwsSignatureCredentialDate(credential.date);
  const { accessKeyId, region, service } = credential;
  return `${accessKeyId}/${date}/${region}/${service}/aws4_request`;
}
