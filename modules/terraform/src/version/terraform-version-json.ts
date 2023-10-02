import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Terraform version JSON
 */
export interface TerraformVersionJson {
  readonly platform: string;
  readonly provider_selections: ReadonlyRecord<string, string>;
  readonly terraform_outdated: boolean;
  readonly terraform_version: string;
}
