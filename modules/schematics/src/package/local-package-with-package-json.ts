import { type LocalPackage } from './local-package';
import { type PackageWithPackageJson } from './package-with-package-json';

/**
 * Local package with package.json content
 */
export interface LocalPackageWithPackageJson extends LocalPackage, PackageWithPackageJson {}
