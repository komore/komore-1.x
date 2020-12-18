/**
 * AWS integrations
 * @template AwsIntegrationTypes AWS integration types
 */
export type AwsIntegrations<AwsIntegrationTypes extends object> = Readonly<{
  aws: AwsIntegrationTypes;
}>;
