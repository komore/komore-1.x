/**
 * Cognito event define auth challenge response
 */
export interface CognitoEventDefineAuthChallengeResponse {
  readonly challengeName: string;
  readonly failAuthentication: boolean;
  readonly issueTokens: boolean;
}
