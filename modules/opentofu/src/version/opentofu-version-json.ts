import { type ReadonlyRecord } from '@komore/typescript';

/**
 * OpenTofu version JSON
 *
 * @private
 */
export interface OpenTofuVersionJson {
  readonly platform: string;
  readonly provider_selections: ReadonlyRecord<string, string>;
  readonly terraform_version: string;
}
