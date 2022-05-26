import { type PackageReferenceName } from '../../package/package-reference-name';

/**
 * JSON task workspace configuration
 */
export interface JsonTaskWorkspaceConfiguration {
  /**
   * Options
   */
  readonly options?: unknown;
  /**
   * Runner
   */
  readonly runner?: PackageReferenceName;
}
