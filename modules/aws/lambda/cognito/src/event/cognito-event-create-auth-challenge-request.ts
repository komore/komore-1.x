import { type ReadonlyRecord } from '@komore/typescript';

export type ChallengeName =
  | 'ADMIN_NO_SRP_AUTH'
  | 'DEVICE_PASSWORD_VERIFIER'
  | 'DEVICE_SRP_AUTH'
  | 'PASSWORD_VERIFIER'
  | 'SMS_MFA'
  | 'SRP_A';

export interface ChallengeResult {
  readonly challengeName: ChallengeName;
  readonly challengeResult: boolean;
}

export interface CustomChallengeResult {
  readonly challengeMetadata?: string;
  readonly challengeName: 'CUSTOM_CHALLENGE';
  readonly challengeResult: boolean;
}

/**
 * Cognito event CreateAuthChallenge request
 */
export interface CognitoEventCreateAuthChallengeRequest {
  readonly challengeName: string;
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  readonly session: ReadonlyArray<ChallengeResult | CustomChallengeResult>;
  readonly userAttributes: ReadonlyRecord<string, string>;
  readonly userNotFound?: boolean;
}
