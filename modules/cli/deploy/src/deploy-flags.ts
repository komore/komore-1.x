/**
 * Deploy flags
 */
export interface DeployFlags {
  /**
   * Environment to deploy to
   */
  readonly environment?: string;
  /**
   * Profile to use during deployment
   */
  readonly profile?: string;
  /**
   * Deploys to the local development server
   */
  readonly local?: boolean;
}
