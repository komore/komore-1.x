/**
 * OpenTofu diagnostic log details
 */
export interface OpenTofuDiagnosticLogDetails {
  readonly diagnostic: {
    readonly details: string;
    readonly severity: 'error';
    readonly summary: string;
  };
}
