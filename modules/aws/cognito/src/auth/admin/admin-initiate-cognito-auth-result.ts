import { type CognitoChallengeName } from '../../challenge/name/cognito-challenge-name';

/**
 * Admin initate Cognito auth result
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html#API_AdminInitiateAuth_ResponseElements AdminInitiateAuth Response Elements}
 */
export interface AdminInitiateCognitoAuthResult {
  /**
   * Authentication result
   */
  readonly AuhenticationResult: unknown; // TODO: type
  /**
   * Challenge name
   */
  readonly ChallengeName: CognitoChallengeName;
  /**
   * Challenge parameters
   */
  readonly ChallengeParameters: unknown;
  /**
   * Sessio
   */
  readonly Session: string;
}
