import { type CognitoChallengeName } from '../challenge/name/cognito-challenge-name';

/**
 * Initiate Cognito auth result
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_ResponseElements InitiateAuth Response Elements}
 */
export interface InitiateCognitoAuthResult {
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
