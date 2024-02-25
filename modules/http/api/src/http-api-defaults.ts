import { type HttpMethod } from '@komore/http';

/**
 * HTTP API defaults
 */
export interface HttpApiDefaults {
  /**
   * Default HTTP method
   */
  readonly method: HttpMethod;
}
