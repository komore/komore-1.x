import { type HttpHeaderName, type HttpMethod } from '@komore/http';

/**
 * To API Gateway event response options CORS
 */
export interface ToApiGatewayEventResponseOptionsCors {
  /**
   * Allowed headers
   */
  readonly allowedHeaders?: ReadonlyArray<HttpHeaderName>;
  /**
   * Allowed methods
   *
   * @note Defaults to the request HTTP method
   */
  readonly allowedMethods?: ReadonlyArray<HttpMethod>;
}
