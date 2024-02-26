import { type CognitoChallengeName } from '@komore/aws/cognito';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CognitoCreateAuthChallengeChallengeResult } from './cognito-create-auth-challenge-challenge-result';
import { type CognitoCreateAuthChallengeCustomChallengeResult } from './cognito-create-auth-challenge-custom-challenge-result';

/**
 * Cognito CreateAuthChallenge request
 */
export interface CognitoCreateAuthChallengeRequest {
  /**
   * Challenge name
   */
  readonly challengeName: CognitoChallengeName;
  /**
   * Client metadata
   */
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  /**
   * Session
   */
  readonly session: ReadonlyArray<
    CognitoCreateAuthChallengeChallengeResult | CognitoCreateAuthChallengeCustomChallengeResult
  >;
  /**
   * User attributes
   */
  readonly userAttributes: ReadonlyRecord<string, string>;
  /**
   * Whether the user was not found
   */
  readonly userNotFound?: boolean;
}
