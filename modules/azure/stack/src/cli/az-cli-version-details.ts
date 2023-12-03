import { type ReadonlyRecord } from '@komore/typescript';

/**
 * az CLI version details
 */
export interface AzCliVersionDetails {
  readonly 'azure-cli': string;
  readonly 'azure-cli-core': string;
  readonly 'azure-cli-telemetry': string;
  readonly extensions: ReadonlyRecord<string, unknown>;
}
