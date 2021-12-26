import { type ApiGatewayEvent } from './event/api-gateway-event';

export function toApiGatewayEventBody(event: ApiGatewayEvent): string | undefined {
  return event.body ?? undefined;
}
