import { isString } from '@komore/string';

import { type PackageManagerType } from './package-manager-type';
import { packageManagerTypes } from './package-manager-types';

/**
 * Tests whether a value is a valid package manager type
 *
 * @param value Value
 * @returns true if the value is a valid package manager type
 */
export function isPackageManagerType(value: unknown): value is PackageManagerType {
  return isString(value) && set.has(value);
}

const set: ReadonlySet<string> = new Set(packageManagerTypes);
