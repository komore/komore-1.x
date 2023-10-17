import { schematicsError } from '../../schematics.error';
import { type PackageName } from './package-name';
import { isPackageName } from './is-package-name';

/**
 * Validates a package name
 *
 * @param packageName Package name
 */
export function validatePackageName(packageName: string): asserts packageName is PackageName {
  if (!isPackageName(packageName)) {
    throw schematicsError('package.name.invalid', { packageName });
  }
}
