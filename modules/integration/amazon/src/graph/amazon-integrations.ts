/**
 * Amazon integrations
 * @template AmazonIntegrationTypes Amazon integration types
 */
export interface AmazonIntegrations<AmazonIntegrationTypes extends object> {
  readonly amazon: AmazonIntegrationTypes;
}
