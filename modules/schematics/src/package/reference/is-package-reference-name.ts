import { isString } from '@komore/string';

import { type PackageReferenceName } from './package-reference-name';

export function isPackageReferenceName(value: unknown): value is PackageReferenceName {
  // TODO: regular expression
  return isString(value) && value.length > 0;
}
