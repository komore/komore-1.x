import { type ApiGatewayHttpApiEvent } from './api-gateway-http-api-event';

/**
 * Tests whether an event is an API Gateway HTTP API event
 * @param event Event
 * @returns true if the event is an API Gateway HTTP API event
 */
export const isApiGatewayHttpApiEvent = createLambdaEventTypeTest<ApiGatewayHttpApiEvent>(
  event => event.type === undefined && event.rawQueryString !== undefined
);
