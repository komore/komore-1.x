import { type PackageReferenceName } from '../package/reference/package-reference-name';

/**
 * Workspace task configuration
 */
export interface WorkspaceTaskConfiguration {
  /**
   * Options (TODO)
   */
  readonly options?: unknown;
  /**
   * Task runner
   */
  readonly runner: PackageReferenceName;
}
