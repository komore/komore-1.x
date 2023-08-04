import { PackageManagerType } from './package-manager-type';
import { packageManagerTypes } from './package-manager-types';

export function isPackageManagerType(value: unknown): value is PackageManagerType {
  return typeof value === 'string' && set.has(value);
}

const set: ReadonlySet<string> = new Set(packageManagerTypes);
