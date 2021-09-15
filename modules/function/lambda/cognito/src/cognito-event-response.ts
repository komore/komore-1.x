import type { CognitoEvent } from './event/cognito-event';
import type { CognitoEventMap, CognitoEventResponseType } from './event/cognito-event-map';

/**
 * Creates a function that sets a response for a Cognito event
 * @param project Projection function
 * @returns Function that sets a response for a Cognito event
 */
export function cognitoEventResponse<TriggerSourceName extends keyof CognitoEventMap>(
  project: (event: CognitoEvent<TriggerSourceName>) => CognitoEventResponseType<TriggerSourceName>
): (cognitoEvent: CognitoEvent<TriggerSourceName>) => CognitoEvent<TriggerSourceName> {
  return cognitoEvent => ({
    ...cognitoEvent,
    response: project(cognitoEvent)
  });
}
