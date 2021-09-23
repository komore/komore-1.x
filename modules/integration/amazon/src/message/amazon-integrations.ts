/**
 * Amazon integrations
 * @template AmazonIntegrationTypes Amazon integration types
 */
export interface AmazonIntegrations<AmazonIntegrationTypes extends Record<string, unknown>> {
  readonly amazon: AmazonIntegrationTypes;
}
