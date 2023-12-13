/**
 * Cargo workspace metadata
 */
export interface CargoWorkspaceMetadata {
  readonly docs: {
    readonly rs: {
      readonly 'all-features': boolean;
    };
  };
}
