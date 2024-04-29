/**
 * pnpm dependency scopes
 */
export const pnpmDependencyScopes = [
  /**
   * Development dependency, i.e. `devDependencies`
   */
  'development',
  /**
   * Optional dependency, i.e. `optionalDependencies`
   */
  'optional',
  /**
   * Peer dependency, i.e. `peerDependencies`
   */
  'peer',
  /**
   * Production dependency, i.e. `dependencies`
   */
  'production',
] as const;
