import { type ReadonlyRecord } from '@komore/typescript';
import { type CognitoEventTokenGenerationGroupOverrideDetails } from './cognito-event-token-generation-group-override-details';

/**
 * Cognito event token generation response
 */
export interface CognitoEventTokenGenerationResponse {
  readonly claimsOverrideDetails: {
    readonly claimsToAddOrOverride?: ReadonlyRecord<string, string>;
    readonly claimsToSuppress?: ReadonlyArray<string>;
    readonly groupOverrideDetails?: CognitoEventTokenGenerationGroupOverrideDetails;
  };
}
