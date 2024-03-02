import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito PreSignUp request
 *
 * @note {@link https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html#cognito-user-pools-lambda-trigger-syntax-pre-signup-request Pre Sign-Up request parameters}
 */
export interface CognitoPreSignUpRequest {
  /**
   * Client metadata
   */
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  /**
   * User attributes
   */
  readonly userAttributes: ReadonlyRecord<string, string>;
  /**
   * Validation data
   */
  readonly validationData?: ReadonlyRecord<string, string>;
}
