import { type IdentityProvider } from '@komore/identity/provider';
import { type OidcIdentityProviderOptions } from './oidc-identity-provider-options';

/**
 * Creates an OpenID Connect identity provider
 * @param options OpenID Connect identity provider options
 * @returns OpenID Connect identity provider
 */
export function oidcIdentityProvider(_options?: OidcIdentityProviderOptions): IdentityProvider {
  return (undefined as unknown) as IdentityProvider;
}
