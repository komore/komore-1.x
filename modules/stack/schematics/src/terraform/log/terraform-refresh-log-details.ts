import { type TerraformLogResource } from './terraform-log-resource';

/**
 * Terraform refresh_start and refresh_complete log details
 */
export interface TerraformRefreshLogDetails {
  readonly hook: {
    readonly resource: TerraformLogResource;
    readonly id_key: string;
    readonly id_value: string;
  };
}
