import { type Observable } from '@komore/reactive';
import { type WorkspaceExecutorDescriptor } from '../executor/workspace-executor-descriptor';
import { type WorkspaceGeneratorDescriptor } from '../generator/workspace-generator-descriptor';
import { type InstalledPackage } from '../package/installed-package';
import { type InstalledPackageWithPackageJson } from '../package/installed-package-with-package-json';
import { type LocalPackage } from '../package/local-package';
import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { type PackageManager } from '../package/package-manager';
import { type ResolvedWorkspaceConfiguration } from '../workspace/resolved-workspace-configuration';

/**
 * Workspace context
 */
export interface WorkspaceContext {
  /**
   * Base path
   */
  readonly basePath: string;
  /**
   * Workspace configuration
   */
  readonly configuration: Observable<ResolvedWorkspaceConfiguration>;
  /**
   * Package infomation
   */
  readonly package: {
    /**
     * Installed packages
     */
    readonly installed: Observable<ReadonlyArray<InstalledPackage>>;
    /**
     * Installed packages' package.json files
     */
    readonly installedPackageJsons: Observable<ReadonlyArray<InstalledPackageWithPackageJson>>;
    /**
     * Local packages, i.e. packages discovered via TypeScript aliases
     */
    readonly local: Observable<ReadonlyArray<LocalPackage>>;
    /**
     * Local packages' package.json files
     */
    readonly localPackageJsons: Observable<ReadonlyArray<LocalPackageWithPackageJson>>;
    /**
     * Package manager
     */
    readonly manager: Observable<PackageManager>;
  };
  /**
   * Schematics information
   */
  readonly schematics: {
    /**
     * List of installed executors
     */
    readonly executors: Observable<ReadonlyArray<WorkspaceExecutorDescriptor>>;
    /**
     * List of installed generators
     */
    readonly generators: Observable<ReadonlyArray<WorkspaceGeneratorDescriptor>>;
  };
  /**
   * TypeScript information
   */
  readonly ts: {
    readonly tsConfigBase: Observable<unknown>;
  };
}
