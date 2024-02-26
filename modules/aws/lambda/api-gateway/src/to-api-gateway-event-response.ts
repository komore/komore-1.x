import { type ApiGatewayEventResponse } from './event/response/api-gateway-event-response';
import { type ToApiGatewayEventResponseOptions } from './to-api-gateway-event-response-options';

/**
 * Creates a function that returns an API gateway event response, given a value
 *
 * @param options Options
 * @returns Function that returns an API gateway event response, given a value
 */
export function toApiGatewayEventResponse(
  options?: ToApiGatewayEventResponseOptions
): (value: unknown) => ApiGatewayEventResponse {
  const statusCode = options?.statusCode ?? 200; // TODO: select 200, 201, 202 or 204
  return value => {
    const body = typeof value === 'string' ? value : JSON.stringify(value);
    return {
      body,
      statusCode,
    };
  };
}
