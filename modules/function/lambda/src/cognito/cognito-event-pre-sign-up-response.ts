/**
 * Cognito event pre sign-up response
 * @note {@link https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html#cognito-user-pools-lambda-trigger-syntax-pre-signup-response Pre Sign-Up response}
 */
export interface CognitoEventPreSignUpResponse {
  readonly autoConfirmUser: boolean;
  readonly autoVerifyEmail: boolean;
  readonly autoVerifyPhone: boolean;
}
