import { type PackageJson } from '@komore/runtime/node';
import { type LocalPackage } from './local-package';

/**
 * Local package with package.json content
 */
export interface LocalPackageWithPackageJson extends LocalPackage {
  /**
   * package.json content
   */
  readonly packageJson: Partial<PackageJson>;
}
