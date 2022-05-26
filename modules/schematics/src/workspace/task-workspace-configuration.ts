import { type PackageReferenceName } from '../package/package-reference-name';

/**
 * Task workspace configuration
 */
export interface TaskWorkspaceConfiguration {
  /**
   * Options (TODO)
   */
  readonly options?: unknown;
  /**
   * Task runner
   */
  readonly runner: PackageReferenceName;
}
