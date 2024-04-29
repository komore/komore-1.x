/**
 * Terraform diagnostic log details
 */
export interface TerraformDiagnosticLogDetails {
  readonly diagnostic: {
    readonly details: string;
    readonly severity: 'error';
    readonly summary: string;
  };
}
