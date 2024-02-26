import { type ReadonlyRecord } from '@komore/typescript';

import { type CognitoDefineAuthChallengeChallengeMetadataTypes } from './cognito-define-auth-challenge-challenge-metadata-types';
import { type CognitoDefineAuthChallengeChallengeResult } from './cognito-define-auth-challenge-challenge-result';

/**
 * Cognito DefineAuthChallenge request
 */
export interface CognitoDefineAuthChallengeRequest {
  /**
   * Client metadata
   */
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  /**
   * Session challenge results
   */
  readonly session: ReadonlyArray<
    CognitoDefineAuthChallengeChallengeResult<keyof CognitoDefineAuthChallengeChallengeMetadataTypes>
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
