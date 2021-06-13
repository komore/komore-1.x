import type { ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito event CreateAuthChallenge response
 */
export interface CognitoEventCreateAuthChallengeResponse {
  readonly challengeMetadata: string;
  readonly privateChallengeParameters: ReadonlyRecord<string, string>;
  readonly publicChallengeParameters: ReadonlyRecord<string, string>;
}
