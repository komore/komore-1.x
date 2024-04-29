/**
 * Get Secrets Manager random password result
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetRandomPassword.html#API_GetRandomPassword_ResponseElements GetRandomPassword Response Elements}
 */
export interface GetSecretsManagerRandomPasswordResult {
  /**
   * Random password
   */
  readonly RandomPassword: string;
}
