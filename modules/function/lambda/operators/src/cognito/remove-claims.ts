import type { CognitoEvent, CognitoEventTokenGenerationTriggerSource } from '@komore/function-lambda';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { mapTokenGenerationResponse } from './map-token-generation-response';

export function removeClaims<EventType extends CognitoEvent<CognitoEventTokenGenerationTriggerSource>, ValueType extends CognitoInput>(
  claims: ReadonlyArray<string>
): MonoTypeOperatorFunction<EventType> {
  return mapTokenGenerationResponse<EventType>(({ response }) => ({
    ...response,
    claimsOverrideDetails: {
      ...response.claimsOverrideDetails,
      claimsToSuppress: [...(response.claimsOverrideDetails.claimsToSuppress ?? []), ...claims]
    }
  }));
}
