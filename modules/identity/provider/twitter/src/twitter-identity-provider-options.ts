/**
 * Twitter identity provider options
 */
export interface TwitterIdentityProviderOptions {
  /**
   * Consumer key
   */
  readonly consumerKey: string;
  /**
   * Consumer secret
   */
  readonly consumerSecret: string;
  /**
   * Redirect URI
   */
  readonly redirectUri: string;
}
