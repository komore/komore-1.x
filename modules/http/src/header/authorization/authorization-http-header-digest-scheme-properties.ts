/**
 * Authorization HTTP header Digest scheme properties
 */
export interface AuthorizationHttpHeaderDigestSchemeProperties {
  readonly algorithm: string;
  readonly opaque: string;
  readonly qop: 'auth' | 'auth-int';
  readonly uri: string;
  readonly userhash: 'true' | 'false';
  readonly username: string;
  readonly realm: string;
}
