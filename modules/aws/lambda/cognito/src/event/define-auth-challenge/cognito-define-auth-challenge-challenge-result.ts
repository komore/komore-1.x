import { type CognitoDefineAuthChallengeChallengeMetadataTypes } from './cognito-define-auth-challenge-challenge-metadata-types';

/**
 * Cognito DefineAuthChallenge challenge result
 */
export interface CognitoDefineAuthChallengeChallengeResult<
  ChallengeName extends keyof CognitoDefineAuthChallengeChallengeMetadataTypes,
> {
  /**
   * Challenge metadata
   */
  readonly challengeMetadata?: CognitoDefineAuthChallengeChallengeMetadataTypes[ChallengeName];
  /**
   * Challenge name
   */
  readonly challengeName: ChallengeName;
  /**
   * Challenge result
   */
  readonly challengeResult: boolean;
}
