import type { ReadonlyRecord } from '@komore/typescript';
import { cognitoEventResponse } from './cognito-event-response';
import type { CognitoEvent } from './event/cognito-event';
import type { CognitoEventTokenGenerationTriggerSource } from './event/cognito-event-token-generation-trigger-source';

export function withClaims<EventType extends CognitoEvent<CognitoEventTokenGenerationTriggerSource>>(
  claims: ReadonlyRecord<string, string>
): (cognitoEvent: EventType) => EventType {
  return cognitoEventResponse(({ response }) => ({
    ...response,
    claimsOverrideDetails: {
      ...response.claimsOverrideDetails,
      claimsToAddOrOverride: {
        ...response.claimsOverrideDetails.claimsToAddOrOverride,
        ...claims
      }
    }
  }));
}
