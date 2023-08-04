import { isPackageReferenceName } from './is-package-reference-name';
import { PackageReferenceName } from './package-reference-name';

export function validatePackageReferenceName(value: string): asserts value is PackageReferenceName {
  if (!isPackageReferenceName(value)) {
    // TODO: proper error
    throw new Error(`invalid package reference name "${value}"`);
  }
}
