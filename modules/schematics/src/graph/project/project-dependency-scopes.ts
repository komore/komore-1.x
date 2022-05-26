/**
 * Project dependency scopes
 */
export const projectDependencyScopes = [
  /**
   * A dependency that is only necessary during the build (e.g. type imports)
   */
  'build',
  /**
   * A dependency that is necessary at runtime
   */
  'runtime',
] as const;
