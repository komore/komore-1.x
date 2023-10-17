import { type PackageName } from './package-name';
import { validatePackageName } from './validate-package-name';

/**
 * Creates a package name from a string
 *
 * @param packageName Package name as a string
 * @returns Package name
 */
export function asPackageName(packageName: string): PackageName {
  validatePackageName(packageName);
  return packageName;
}
