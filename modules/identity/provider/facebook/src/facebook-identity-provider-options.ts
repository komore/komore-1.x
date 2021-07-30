/**
 * Facebook identity provider options
 */
export interface FacebookIdentityProviderOptions {
  /**
   * Facebook application secret
   */
  readonly appSecret: string;
  /**
   * Facebook application identifier
   */
  readonly appId: string;
  /**
   * Redirection URI
   */
  readonly redirectUri: string;
}
