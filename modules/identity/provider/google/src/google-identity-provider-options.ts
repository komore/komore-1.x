/**
 * Google identity provider options
 */
export interface GoogleIdentityProviderOptions {
  /**
   * Google application secret
   */
  readonly appSecret: string;
  /**
   * Google application identifier
   */
  readonly appId: string;
  /**
   * Redirection URI
   */
  readonly redirectUri: URL;
}
