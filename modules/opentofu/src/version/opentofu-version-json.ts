import { type ReadonlyRecord } from '@komore/typescript';

/**
 * OpenTofu version JSON
 */
export interface OpenTofuVersionJson {
  readonly platform: string;
  readonly provider_selections: ReadonlyRecord<string, string>;
  readonly terraform_outdated: boolean; // NOTE: not renamed yet as of 1.6.0 alpha 3
  readonly terraform_version: string;
}
