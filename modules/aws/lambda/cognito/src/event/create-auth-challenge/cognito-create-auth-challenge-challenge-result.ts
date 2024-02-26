import { type CognitoChallengeName } from '@komore/aws/cognito';

/**
 * Cognito CreateAuthChallenge challenge result
 */
export interface CognitoCreateAuthChallengeChallengeResult {
  /**
   * Challenge name
   */
  readonly challengeName: CognitoChallengeName;
  /**
   * Challenge result
   */
  readonly challengeResult: boolean;
}
