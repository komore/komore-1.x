import { createLambdaEventTypeTest } from '../create-lambda-event-type-test';
import type { ApiGatewayEvent } from './api-gateway-event';

/**
 * Tests whether an event is an API Gateway event
 * @param event Event
 * @returns true if the event is an API Gateway event
 */
 export const isApiGatewayEvent = createLambdaEventTypeTest<ApiGatewayEvent>(
  event => event.type === undefined && event.queryStringParameters !== undefined
);
