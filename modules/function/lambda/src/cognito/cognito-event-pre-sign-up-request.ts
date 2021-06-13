import type { ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito event pre sign-up request
 * @note {@link https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html#cognito-user-pools-lambda-trigger-syntax-pre-signup-request Pre Sign-Up request parameters}
 */
export interface CognitoEventPreSignUpRequest {
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  readonly userAttributes: ReadonlyRecord<string, string>;
  readonly validationData?: ReadonlyRecord<string, string>;
}
