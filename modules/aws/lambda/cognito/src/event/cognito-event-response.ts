import { type CognitoEvent } from './cognito-event';

export function cognitoEventResponse<EventType extends CognitoEvent>(
  project: (response: EventType['response']) => EventType['response']
): (event: EventType) => EventType {
  return ({ response, ...event }) => ({
    ...event,
    response: project(response),
  });
}
