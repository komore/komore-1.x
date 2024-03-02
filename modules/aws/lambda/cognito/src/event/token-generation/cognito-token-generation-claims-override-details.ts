import { type ReadonlyRecord } from '@komore/typescript';

import { type CognitoTokenGenerationGroupOverrideDetails } from './cognito-token-generation-group-override-details';

/**
 * Cognito TokenGeneration claims override details
 */
export interface CognitoTokenGenerationClaimsOverrideDetails {
  /**
   * Claims to add or override
   */
  readonly claimsToAddOrOverride?: ReadonlyRecord<string, string>;
  /**
   * Claims to suppress
   */
  readonly claimsToSuppress?: ReadonlyArray<string>;
  /**
   * Group override details
   */
  readonly groupOverrideDetails?: CognitoTokenGenerationGroupOverrideDetails;
}
