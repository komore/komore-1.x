import { createFunction } from '@komore/function';
import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Authorize query parameters
 */
export interface AuthorizeParameters {
  readonly client_id: string;
  /**
   * Code challenge
   */
  readonly code_challenge?: string;
  /**
   * Code challenge method
   */
  readonly code_challenge_method?: string; // TODO: S256
  readonly display?: ;

  /**
   * Response type
   */
  readonly response_type: 'code' | 'id_token' | 'token';
  readonly state?: string;
}
