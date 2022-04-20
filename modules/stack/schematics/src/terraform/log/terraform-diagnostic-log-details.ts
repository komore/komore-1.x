/**
 * Terraform diagnostic log details
 */
export interface TerraformDiagnosticLogDetails {
  readonly diagnostic: {
    readonly severity: 'error';
    readonly summary: string;
    readonly details: string;
  };
}
