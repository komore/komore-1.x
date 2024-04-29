/**
 * Secrets Manager secret rotation rules
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RotationRulesType.html RotationRulesType}
 */
export interface SecretsManagerSecretRotationRules {
  readonly AutomaticallyAfterDays?: number;
  readonly Duration?: string;
  readonly ScheduleExpression?: string;
}
