import type { ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito event verify auth challenge response request
 */
export interface CognitoEventVerifyAuthChallengeResponseRequest {
  readonly challengeAnswer: string;
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  readonly privateChallengeParameters: ReadonlyRecord<string, string>;
  readonly userAttributes: ReadonlyRecord<string, string>;
  readonly userNotFound?: boolean;
}
