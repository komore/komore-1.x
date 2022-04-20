import { type PackageReference } from '../package/package-reference';

export function packageReferenceNameToPackageReference(packageReferenceName: string): PackageReference {
  const split = packageReferenceName.split('#');
  if (split.length !== 2) {
    throw new Error(`invalid package reference ${packageReferenceName}`);
  }

  const [packageName, exportedEntryName] = split as unknown as readonly [string, string];

  return {
    packageName,
    exportedEntryName,
  };
}
