import { type ReadonlyRecord } from "@komore/typescript";

/**
 * AWS integrations
 *
 * @template AwsIntegrationTypes AWS integration types
 */
export interface AwsIntegrations<AwsIntegrationTypes extends ReadonlyRecord<string, unknown>> {
  readonly aws: AwsIntegrationTypes;
}
