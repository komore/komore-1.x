import { type CognitoTokenGenerationClaimsOverrideDetails } from './cognito-token-generation-claims-override-details';

/**
 * Cognito TokenGeneration response
 */
export interface CognitoTokenGenerationResponse {
  /**
   * Claims override details
   */
  readonly claimsOverrideDetails: CognitoTokenGenerationClaimsOverrideDetails;
}
