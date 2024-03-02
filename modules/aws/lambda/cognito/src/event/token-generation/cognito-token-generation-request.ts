import { type ReadonlyRecord } from '@komore/typescript';

import { type CognitoTokenGenerationGroupOverrideDetails } from './cognito-token-generation-group-override-details';

/**
 * Cognito TokenGeneration request
 */
export interface CognitoTokenGenerationRequest {
  /**
   * User attributes
   */
  readonly userAttributes: ReadonlyRecord<string, string>;
  /**
   * Group configuration
   */
  readonly groupConfiguration: CognitoTokenGenerationGroupOverrideDetails;
  /**
   * Client metadata
   */
  readonly clientMetadata?: ReadonlyRecord<string, string>;
}
