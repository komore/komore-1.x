import { type InstalledPackage } from './installed-package';
import { type PackageWithPackageJson } from './package-with-package-json';

/**
 * Installed package with package.json content
 */
export interface InstalledPackageWithPackageJson extends InstalledPackage, PackageWithPackageJson {}
