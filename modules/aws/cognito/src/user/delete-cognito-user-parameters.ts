/**
 * Delete Cognito user parameters
 *
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUser.html#API_DeleteUser_RequestParameters DeleteUser Request Parameters}
 */
export interface DeleteCognitoUserParameters {
  /**
   * Access token
   */
  readonly AccessToken: string;
}
