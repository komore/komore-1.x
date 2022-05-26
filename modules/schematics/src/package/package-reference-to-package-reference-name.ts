import { type PackageReference } from './package-reference';
import { type PackageReferenceName } from './package-reference-name';

/**
 * Returns a package reference name, given a package reference
 *
 * @param packageReference Package reference
 * @returns Package reference name
 */
export function packageReferenceToPackageReferenceName(packageReference: PackageReference): PackageReferenceName {
  const { exportedEntryName, packageName } = packageReference;
  return `${packageName}:${exportedEntryName}` as PackageReferenceName;
}
