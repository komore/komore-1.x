/**
 * Terraform change_summary log details
 */
export interface TerraformChangeSummaryLogDetails {
  readonly changes: {
    readonly add: number;
    readonly change: number;
    readonly remove: number;
    readonly operation: 'plan';
  };
}
