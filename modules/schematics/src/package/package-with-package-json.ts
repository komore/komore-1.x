import { type PackageJson } from '@komore/node';

/**
 * Package with package.json
 */
export interface PackageWithPackageJson {
  /**
   * package.json content
   */
  readonly packageJson: Partial<PackageJson>;
}
