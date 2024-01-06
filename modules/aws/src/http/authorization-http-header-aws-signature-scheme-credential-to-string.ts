import { type AuthorizationHttpHeaderAwsSignatureSchemeCredential } from './authorization-http-header-aws-signature-scheme-credential';
import { dateToAwsSignatureCredentialDate } from './date-to-aws-signature-credential-date';

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
  const { accessKeyId, awsRegion } = credential;
  return `${accessKeyId}/${date}/${awsRegion}`;
}
