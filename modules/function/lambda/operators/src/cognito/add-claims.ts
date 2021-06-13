import type { CognitoEvent, CognitoEventTokenGenerationTriggerSource } from '@komore/function-lambda';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import type { ReadonlyRecord } from '@komore/typescript';
import { mapTokenGenerationResponse } from './map-token-generation-response';

export function addClaims<EventType extends CognitoEvent<CognitoEventTokenGenerationTriggerSource>>(
  claims: ReadonlyRecord<string, string>
): MonoTypeOperatorFunction<EventType> {
  return mapTokenGenerationResponse<EventType>(({ response }) => ({
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
