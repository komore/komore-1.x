/**
 * With auto verified Cognito user options
 */
export interface WithAutoVerifedCognitoUserOptions {
  /**
   * Whether the email should be automatically verified
   */
  readonly email: boolean;
  /**
   * Whether the phone should be automatically verified
   */
  readonly phone: boolean;
}
