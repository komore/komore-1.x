
import { type CognitoEvent } from './cognito-event';
import { type CognitoEventMap } from './cognito-event-map';

/**
 * Tests whether an event is a Cognito event
 *
 * @param event Event
 * @returns true if the event is a Cognito event
 */
export function isCognitoEvent = createLambdaEventTypeTest<CognitoEvent<keyof CognitoEventMap>>(
  event => event.type === undefined && event.userPoolId !== undefined
);
