import { type PackageReferenceName } from './package-reference-name';

export function isPackageReferenceName(value: unknown): value is PackageReferenceName {
  // TODO: regular expression
  return typeof value === 'string' && value.length > 0;
}
