import { type PackageManagerType } from '../package/manager/package-manager-type';

/**
 * Workspace package configuration
 */
export interface WorkspacePackageConfiguration {
  /**
   * Package manager type
   */
  readonly manager: PackageManagerType;
  /**
   * Package scope
   */
  readonly scope: string;
}
