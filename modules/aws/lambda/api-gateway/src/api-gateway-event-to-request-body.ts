import { type ApiGatewayEvent } from './event/api-gateway-event';

export function apiGatewayEventToRequestBody(event: ApiGatewayEvent): string | undefined {
  return event.body ?? undefined;
}
