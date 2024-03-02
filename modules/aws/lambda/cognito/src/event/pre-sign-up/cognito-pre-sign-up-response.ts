/**
 * Cognito PreSignUp response
 *
 * @note {@link https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html#cognito-user-pools-lambda-trigger-syntax-pre-signup-response Pre Sign-Up response}
 */
export interface CognitoPreSignUpResponse {
  /**
   * Whether the user should be automatically confirmed
   */
  readonly autoConfirmUser: boolean;
  /**
   * Whether the email should be automatically verified
   */
  readonly autoVerifyEmail: boolean;
  /**
   * Whether the phone should be automatically verified
   */
  readonly autoVerifyPhone: boolean;
}
