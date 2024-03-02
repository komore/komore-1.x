import { createAuthorizationHttpHeader, type HttpHeader } from '@komore/http';

import { type AuthorizationHttpHeaderAwsSignatureSchemeProperties } from './authorization-http-header-aws-signature-scheme-properties';
import { authorizationHttpHeaderAwsSignatureSchemeCredentialToString } from './authorization-http-header-aws-signature-scheme-credential-to-string';

/**
 * Returns an Authorization HTTP header using the AWS HMAC SHA-256 authentication scheme
 *
 * @param schemeProperties AWS signature scheme properties
 * @returns Authorization HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization Authorization}
 */
export function createAwsSignatureAuthorizationHttpHeader(
  schemeProperties: AuthorizationHttpHeaderAwsSignatureSchemeProperties
): HttpHeader {
  const authorizationScheme = 'AWS4-HMAC-SHA256';
  const { credential, signature, signedHeaders } = schemeProperties;
  const properties = [
    ['Credential', authorizationHttpHeaderAwsSignatureSchemeCredentialToString(credential)],
    ['SignedHeaders', signedHeaders.join(';')],
    ['Signature', signature],
  ];
  const authorizationParameters = properties.map(([name, value]) => `${name}=${value}`).join(', ');
  return createAuthorizationHttpHeader(authorizationScheme, authorizationParameters);
}
