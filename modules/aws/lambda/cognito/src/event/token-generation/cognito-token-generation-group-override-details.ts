/**
 * Cognito TokenGeneration group override details
 */
export interface CognitoTokenGenerationGroupOverrideDetails {
  /**
   * Groups to override
   */
  readonly groupsToOverride?: ReadonlyArray<string>;
  /**
   * IAM roles to override
   */
  readonly iamRolesToOverride?: ReadonlyArray<string>;
  /**
   * Preferred role
   */
  readonly preferredRole?: string;
}
