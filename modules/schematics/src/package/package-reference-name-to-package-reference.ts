import { type PackageReference } from '../package/package-reference';
import { type PackageName } from './package-name';
import { type PackageReferenceName } from './package-reference-name';

/**
 * Returns a package reference, given a package reference name
 *
 * @param packageReferenceName Package reference name
 * @returns Package reference
 */
export function packageReferenceNameToPackageReference(packageReferenceName: PackageReferenceName): PackageReference {
  const split = packageReferenceName.split('#');
  if (split.length !== 2) {
    throw new Error(`invalid package reference ${packageReferenceName}`);
  }

  const [packageName, exportedEntryName] = split as unknown as readonly [PackageName, string];

  return {
    packageName,
    exportedEntryName,
  };
}
