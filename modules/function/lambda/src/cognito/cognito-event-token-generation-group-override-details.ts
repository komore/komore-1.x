/**
 * Cognito event token generation group override details
 */
export interface CognitoEventTokenGenerationGroupOverrideDetails {
  readonly groupsToOverride?: ReadonlyArray<string>;
  readonly iamRolesToOverride?: ReadonlyArray<string>;
  readonly preferredRole?: string;
}
