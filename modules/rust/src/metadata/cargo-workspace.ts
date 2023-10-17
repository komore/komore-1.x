import { type CargoMetadata } from './cargo-metadata';
import { type CargoPackage } from './cargo-package';
import { type CargoResolveNode } from './cargo-resolve-node';

/**
 * Cargo workspace
 */
export interface CargoWorkspace {
  /**
   * Metadata
   */
  readonly metadata: CargoMetadata | null;
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
     * Root (TODO)
     */
    readonly root: null;
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
