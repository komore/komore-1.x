import { type TerraformChangeSummaryLogDetails } from './terraform-change-summary-log-details';
import { type TerraformPlannedChangeLogDetails } from './terraform-planned-change-log-details';
import { type TerraformRefreshLogDetails } from './terraform-refresh-log-details';
import { type TerraformVersionLogDetails } from './terraform-version-log-details';

/**
 * Terraform log details mapping
 */
export interface TerraformLogDetails {
  readonly change_summary: TerraformChangeSummaryLogDetails;
  readonly planned_change: TerraformPlannedChangeLogDetails;
  readonly refresh_complete: TerraformRefreshLogDetails;
  readonly refresh_start: TerraformRefreshLogDetails;
  readonly version: TerraformVersionLogDetails;
}
