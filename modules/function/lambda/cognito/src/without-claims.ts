import { cognitoEventResponse } from './cognito-event-response';
import type { CognitoEvent } from './event/cognito-event';
import type { CognitoEventTokenGenerationTriggerSource } from './event/cognito-event-token-generation-trigger-source';

export function withoutClaims<EventType extends CognitoEvent<CognitoEventTokenGenerationTriggerSource>>(
  claims: ReadonlyArray<string>
): (cognitoEvent: EventType) => EventType {
  return cognitoEventResponse(({ response }) => ({
    ...response,
    claimsOverrideDetails: {
      ...response.claimsOverrideDetails,
      claimsToSuppress: [...(response.claimsOverrideDetails.claimsToSuppress ?? []), ...claims]
    }
  }));
}
