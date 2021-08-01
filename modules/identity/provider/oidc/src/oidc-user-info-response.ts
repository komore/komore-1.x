import type { OidcStandardClaimName } from './oidc-standard-claim-name';

/**
 * OpenID Connect user info response
 * @see {@link https://openid.net/specs/openid-connect-core-1_0.html#UserInfoResponse UserInfo Response}
 */
export type OidcUserInfoResponse = Partial<Record<OidcStandardClaimName | string, unknown>>;
