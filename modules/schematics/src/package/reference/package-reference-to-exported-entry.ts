import { isDefined } from '@komore/functional';
import { deferPromise, map, throwUnless, type Observable } from '@komore/reactive';

import { type PackageReference } from './package-reference';

/**
 * Creates a function that returns an exported entry from a package reference
 *
 * @returns Function that returns an exported entry from a package reference
 * @template T Exported entry type
 */
export function packageReferenceToExportedEntry<T>(): (packageReference: PackageReference) => Observable<T> {
  return ({ packageName, exportedEntryName }) =>
    deferPromise(() => import(packageName)).pipe(
      map(exportedEntries => exportedEntries[exportedEntryName]),
      // TODO: proper error
      throwUnless(isDefined, () => new Error(`welp... no ${exportedEntryName} in ${packageName}`))
    );
}
