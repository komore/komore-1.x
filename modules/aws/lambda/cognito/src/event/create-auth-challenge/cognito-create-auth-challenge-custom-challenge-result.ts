import { type CognitoChallengeName } from '@komore/aws/cognito';

/**
 * Cognito CreateAuthChallenge custom challenge result
 */
export interface CognitoCreateAuthChallengeCustomChallengeResult {
  /**
   * Challenge metadata
   */
  readonly challengeMetadata?: string;
  /**
   * Challenge name
   */
  readonly challengeName: Extract<CognitoChallengeName, 'CUSTOM_CHALLENGE'>;
  /**
   * Challenge result
   */
  readonly challengeResult: boolean;
}
