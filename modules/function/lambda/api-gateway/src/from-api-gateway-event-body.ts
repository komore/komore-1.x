import type { ApiGatewayEvent } from './event/api-gateway-event';

export function fromApiGatewayEventBody(event: ApiGatewayEvent): string | undefined {
  return event.body ?? undefined;
}
