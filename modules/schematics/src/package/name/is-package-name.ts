import { type PackageName } from './package-name';

/**
 * Tests whether a string is a valid package name
 *
 * @param packageName Package name string
 * @returns true if the string is package name string
 */
export function isPackageName(packageName: string): packageName is PackageName {
  // TODO: better test
  return packageName.length > 0;
}
