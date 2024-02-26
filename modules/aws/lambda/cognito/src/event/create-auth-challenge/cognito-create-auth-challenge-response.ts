import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito CreateAuthChallenge response
 */
export interface CognitoCreateAuthChallengeResponse {
  /**
   * Challenge metadata
   */
  readonly challengeMetadata: string;
  /**
   * Private challenge parameters
   */
  readonly privateChallengeParameters: ReadonlyRecord<string, string>;
  /**
   * Public challenge parameters
   */
  readonly publicChallengeParameters: ReadonlyRecord<string, string>;
}
