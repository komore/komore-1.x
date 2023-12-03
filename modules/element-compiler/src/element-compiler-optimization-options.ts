/**
 * Element compiler optimization options
 */
export interface ElementCompilerOptimizationOptions {
  /**
   * Avoid using imports during code generation (type imports are not concerned)
   */
  readonly avoidImports: boolean;
}
