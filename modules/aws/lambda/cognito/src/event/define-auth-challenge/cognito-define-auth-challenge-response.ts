import { type CognitoChallengeName } from '@komore/aws/cognito';

/**
 * Cognito DefineAuthChallenge response
 */
export interface CognitoDefineAuthChallengeResponse {
  /**
   * Challenge name
   */
  readonly challengeName: CognitoChallengeName;
  /**
   * Whether to fail authentication
   */
  readonly failAuthentication: boolean;
  /**
   * Whether tokens should be issued
   */
  readonly issueTokens: boolean;
}
