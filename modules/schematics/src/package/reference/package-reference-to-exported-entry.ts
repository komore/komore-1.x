import { isDefined } from '@komore/functional';
import { isErrnoException } from '@komore/node';
import { deferValue, map, throwIfError, throwUnless } from '@komore/reactive';
import { isString } from '@komore/string';
import { type ReadonlyRecord } from '@komore/typescript';

import { schematicsError } from '../../schematics.error';
import { type PackageReference } from './package-reference';

/**
 * Creates a function that returns an exported entry from a package reference
 *
 * @returns Function that returns an exported entry from a package reference
 * @template T Exported entry type
 */
export function packageReferenceToExportedEntry<T>(): (packageReference: PackageReference) => Observable<T> {
  return ({ packageName, exportedEntryName: entryName }) =>
    // TODO: import()
    deferValue(() => require(packageName) as ReadonlyRecord<string, unknown>).pipe(
      throwIfError(isModuleNotFoundError, () => schematicsError.moduleNotFound({ moduleName: packageName })),
      map(exportedEntries => exportedEntries[entryName]),
      throwUnless(isDefined, () => schematicsError.moduleExportNotFound({ moduleName: packageName, entryName })),
      map(exportedEntry => exportedEntry as T)
    );
}

/**
 * Tests whether an error is a Node module not found error
 *
 * - `MODULE_NOT_FOUND` when using `require()`
 * - `ERR_MODULE_NOT_FOUND` when using `import()`
 *
 * @param error Error
 * @returns true if the error is a Node module not found error
 */
function isModuleNotFoundError(error: unknown): boolean {
  const errorCodes = ['MODULE_NOT_FOUND', 'ERR_MODULE_NOT_FOUND'];
  if (isErrnoException(error)) {
    const { code } = error;
    return isString(code) && errorCodes.includes(code);
  }

  return false;
}
