/**
 * OpenTofu change_summary log details
 */
export interface OpenTofuChangeSummaryLogDetails {
  readonly changes: {
    readonly add: number;
    readonly change: number;
    readonly remove: number;
    readonly operation: 'plan';
  };
}
