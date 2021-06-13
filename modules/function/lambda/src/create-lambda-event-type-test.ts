import type {
  APIGatewayRequestAuthorizerEvent,
  APIGatewayTokenAuthorizerEvent,
} from 'aws-lambda';
import type { LambdaEvent } from './lambda-event';
import type { UnknownLambdaEvent } from './unknown-lambda-event';

/**
 * Lambda event type test
 */
type LambdaEventTypeTest<T extends LambdaEvent> = (event: LambdaEvent) => event is T;

/**
 * Builds an event type test
 * @param test Test
 * @returns Event type test
 */
export function createLambdaEventTypeTest<T extends LambdaEvent>(test: (ev: UnknownLambdaEvent) => boolean): LambdaEventTypeTest<T> {
  return function (event: LambdaEvent): event is T {
    const anyEvent = event as UnknownLambdaEvent;
    return test(anyEvent);
  };
}

/**
 * Tests whether an event is an API request authorizer event
 * @param event Event
 * @returns true if the event is an API Gateway request authorizer event
 */
export const isAPIGatewayRequestAuthorizerEvent = createLambdaEventTypeTest<APIGatewayRequestAuthorizerEvent>(
  event => event.type === 'REQUEST'
);

/**
 * Tests whether an event is an API token authorizer event
 * @param event Event
 * @returns true if the event is an API Gateway token authorizer event
 */
export const isAPIGatewayTokenAuthorizerEvent = createLambdaEventTypeTest<APIGatewayTokenAuthorizerEvent>(
  event => event.type === 'TOKEN' && event.authorizationToken === 'incoming-client-token'
);
