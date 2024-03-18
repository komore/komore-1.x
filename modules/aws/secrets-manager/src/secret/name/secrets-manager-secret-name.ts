/**
 * Secrets Manager secret name
 */
export type SecretsManagerSecretName = string & {
  readonly __tag_awsSecretsManagerSecretName: unique symbol;
};
