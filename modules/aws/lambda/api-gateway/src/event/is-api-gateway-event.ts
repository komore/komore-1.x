import { type ApiGatewayEvent } from './api-gateway-event';

/**
 * Tests whether an event is an API Gateway event
 *
 * @param event Event
 * @returns true if the event is an API Gateway event
 */
export function isApiGatewayEvent(event: unknown): event is ApiGatewayEvent {
  const maybeApiGatewayEent = event as Partial<ApiGatewayEvent> & { readonly type?: unknown };
  return maybeApiGatewayEent.type === undefined && maybeApiGatewayEent.queryStringParameters !== undefined;
}
