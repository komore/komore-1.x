/**
 * Authorization parameters
 */
export interface AuthorizationParameters {
  /**
   * Client identifier
   */
  readonly client_id: string;
  /**
   * PKCE code challenge
   */
  readonly code_challenge?: string;
  /**
   * PKCE code challenge method
   */
  readonly code_challenge_method?: 'S256' | 'plain';
  readonly display?: ;
  /**
   * Redirect URI where authentication responses can be sent
   */
  readonly redirect_uri?: string;
  /**
   * Response type
   */
  readonly response_type: 'code' | 'id_token' | 'token';
  /**
   * Space-separated list of scopes
   */
  readonly scope: string; // NOTE: must include 'openid'
  readonly state?: string;
}
