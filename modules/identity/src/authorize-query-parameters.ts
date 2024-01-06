/**
 * Authorize query parameters
 */
export interface AuthorizeQueryParameters {
  readonly client_id: string;
  /**
   * Code challenge
   */
  readonly code_challenge?: string;
  /**
   * Code challenge method
   */
  readonly code_challenge_method?: string; // TODO: S256
  readonly display?: unknown;

  /**
   * Response type
   */
  readonly response_type: 'code' | 'id_token' | 'token';
  readonly state?: string;
}
