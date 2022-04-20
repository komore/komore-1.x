import { type PackageJson } from '@komore/runtime/node';
import { type InstalledPackage } from './installed-package';

/**
 * Installed package with package.json content
 */
export interface InstalledPackageWithPackageJson extends InstalledPackage {
  /**
   * package.json content
   */
  readonly packageJson: Partial<PackageJson>;
}
