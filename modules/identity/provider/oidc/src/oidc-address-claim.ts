/**
 * OpenID Connect address claim
 * @see {@link https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim Address Claim}
 */
export interface OidcAddressClaim {
  /**
   * Full mailing address
   */
  readonly formatted: string;
  /**
   * City or locality
   */
  readonly locality: string;
  /**
   * Zip code or postal code
   */
  readonly postal_code: string;
  /**
   * State, province, prefecture or region
   */
  readonly region: string;
  /**
   * Full street address
   */
  readonly street_address: string;
}
