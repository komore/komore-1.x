import { type HttpHeader } from '../http-header';
import { type AuthorizationHttpHeaderDigestSchemeProperties } from './authorization-http-header-digest-scheme-properties';

/**
 * Returns an Authorization HTTP header using the Basic authorization scheme
 *
 * @param authorizationScheme Authorization scheme
 * @param credentials Credentials
 * @returns Authorization HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization Authorization}
 */
export function createAuthorizationHttpHeader(authorizationScheme: 'Basic', credentials: string): HttpHeader;

/**
 * Returns an Authorization HTTP header using the Bearer authorization scheme
 *
 * @param authorizationScheme Authorization scheme
 * @param token Token
 * @returns Authorization HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization Authorization}
 */
export function createAuthorizationHttpHeader(authorizationScheme: 'Bearer', token: string): HttpHeader;

/**
 * Returns an Authorization HTTP header using the Digest authorization scheme
 *
 * @param authorizationScheme Authorization scheme
 * @param schemeProperties Digest scheme properties
 * @returns Authorization HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization Authorization}
 */
export function createAuthorizationHttpHeader(
  authorizationScheme: 'Digest',
  schemeProperties: AuthorizationHttpHeaderDigestSchemeProperties
): HttpHeader;

/**
 * Returns an Authorization HTTP header using the Negotiate authorization scheme
 *
 * @param authorizationScheme Authorization scheme
 * @param credentials Credentials
 * @returns Authorization HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization Authorization}
 */
export function createAuthorizationHttpHeader(authorizationScheme: 'Negotiate', credentials: string): HttpHeader;

/**
 * Returns an Authorization HTTP header
 *
 * @param authorizationScheme Authorization scheme
 * @param authorizationParameters Authorization parameters
 * @returns Authorization HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization Authorization}
 */
export function createAuthorizationHttpHeader(authorizationScheme: string, authorizationParameters: string): HttpHeader;

export function createAuthorizationHttpHeader(
  authorizationScheme: string,
  authorizationValueOrDigestProperties: string | AuthorizationHttpHeaderDigestSchemeProperties
): HttpHeader {
  if (typeof authorizationValueOrDigestProperties === 'string') {
    return ['authorization', `${authorizationScheme} ${authorizationValueOrDigestProperties}`];
  }

  const value = `${authorizationScheme} TODO`;

  return ['authorization', value];
}
