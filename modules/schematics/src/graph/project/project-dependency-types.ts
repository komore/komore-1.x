/**
 * Project dependency types
 */
export const projectDependencyTypes = [
  /**
   * Explicit dependency loaded dynamically, e.g. importing via `import(Y)`
   */
  'dynamic',
  /**
   * Explicit dependency, e.g. importing via `import X from Y`
   */
  'explicit',
  /**
   * Implicit dependency, e.g. imported via configuration
   */
  'implicit',
] as const;
