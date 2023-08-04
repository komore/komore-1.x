import { schematicsError } from '../../schematics.error';
import { isPackageManagerType } from './is-package-manager-type';
import { type PackageManagerType } from './package-manager-type';

export function validatePackageManagerType(type: string): asserts type is PackageManagerType {
  if (!isPackageManagerType(type)) {
    throw schematicsError('package.manager.type.invalid', { type });
  }
}
