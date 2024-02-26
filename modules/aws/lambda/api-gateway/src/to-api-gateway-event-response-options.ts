import { type HttpHeader, type HttpStatus } from '@komore/http';

import { type ToApiGatewayEventResponseOptionsCors } from './to-api-gateway-event-response-options-cors';

/**
 * To API Gateway event response options
 */
export interface ToApiGatewayEventResponseOptions {
  /**
   * CORS options
   */
  readonly cors?: ToApiGatewayEventResponseOptionsCors;
  /**
   * HTTP headers
   */
  readonly httpHeaders?: ReadonlyArray<HttpHeader>;
  /**
   * HTTP status code
   *
   * When the status code is not specified, it is determined following these rules:
   *
   * - `200` (OK) for a `GET` or `PUT` request
   * - `201` (Created) for a `POST` request with a response body
   * - `202` (Accepted) for a `POST` request without a response body
   * - `204` (No Content) for a `DELETE` request
   */
  readonly statusCode?: HttpStatus;
}
