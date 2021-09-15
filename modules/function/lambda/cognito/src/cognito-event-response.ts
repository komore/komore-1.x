import type { CognitoEvent } from './event/cognito-event';
import type { CognitoEventMap, CognitoEventResponseType } from './event/cognito-event-map';

/**
 * Creates a function that sets a response for a Cognito event
 * @param project Projection function
 * @returns Function that sets a response for a Cognito event
 * @template TriggerSourceName Trigger source name
 * @template EventType Event type
 */
export function cognitoEventResponse<TriggerSourceName extends keyof CognitoEventMap, EventType extends CognitoEvent<TriggerSourceName>>(
  project: (event: EventType) => CognitoEventResponseType<TriggerSourceName>
): (cognitoEvent: EventType) => EventType {
  return cognitoEvent => ({
    ...cognitoEvent,
    response: project(cognitoEvent)
  });
}
