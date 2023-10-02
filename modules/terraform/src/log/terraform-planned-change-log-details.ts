import { type TerraformLogResource } from './terraform-log-resource';

/**
 * Terraform planned_change log details
 */
export interface TerraformPlannedChangeLogDetails {
  readonly change: {
    readonly resource: TerraformLogResource;
    readonly action: 'create';
  };
}
