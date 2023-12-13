import { type CargoPackage } from './cargo-package';
import { type CargoResolveNode } from './cargo-resolve-node';
import { type CargoWorkspaceMetadata } from './cargo-workspace-metadata';

/**
 * Cargo workspace
 */
export interface CargoWorkspace {
  /**
   * Metadata
   */
  readonly metadata: CargoWorkspaceMetadata | null;
  /**
   * Packages
   */
  readonly packages: ReadonlyArray<CargoPackage>;
  /**
   * Resolution information
   */
  readonly resolve: {
    /**
     * Nodes
     */
    readonly nodes: ReadonlyArray<CargoResolveNode>;
    /**
     * Root package of the workspace
     */
    readonly root: string | null;
  };
  /**
   * Target directory
   */
  readonly target_directory: string;
  /**
   * Metadata format version
   */
  readonly version: 1;
  /**
   * Workspace members
   */
  readonly workspace_members: ReadonlyArray<string>;
  /**
   * Workspace root
   */
  readonly workspace_root: string;
}
