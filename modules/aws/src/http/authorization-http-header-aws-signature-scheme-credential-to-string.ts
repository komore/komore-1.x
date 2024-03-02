import { dateToAwsSignatureCredentialDate } from '../date-time/date-to-aws-signature-credential-date';
import { type AuthorizationHttpHeaderAwsSignatureSchemeCredential } from './authorization-http-header-aws-signature-scheme-credential';

/**
 * Returns a string formatted for use in an Authorization header, given an AWS signature scheme credential
 *
 * @param credential Authorization HTTP header AWS signature scheme credential
 * @private
 */
export function authorizationHttpHeaderAwsSignatureSchemeCredentialToString(
  credential: AuthorizationHttpHeaderAwsSignatureSchemeCredential
): string {
  const date = dateToAwsSignatureCredentialDate(credential.date);
  const { accessKeyId, region, service } = credential;
  return `${accessKeyId}/${date}/${region}/${service}/aws4_request`;
}
