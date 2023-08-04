import { type PackageReferenceName } from '../../package/package-reference-name';

/**
 * Task workspace configuration JSON
 */
export interface TaskWorkspaceConfigurationJson {
  /**
   * Options
   */
  readonly options?: unknown;
  /**
   * Runner
   */
  readonly runner?: PackageReferenceName;
}
