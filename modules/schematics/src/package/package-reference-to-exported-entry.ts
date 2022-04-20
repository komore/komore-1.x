import { isDefined } from '@komore/functional';
import { deferPromise, map, throwUnless, type Observable } from '@komore/reactive';
import { type PackageReference } from './package-reference';

/**
 * Returns an exported entry from a package reference
 *
 * @param packageReference Package reference
 * @returns Exported entry
 * @template T Exported entry type
 */
export function packageReferenceToExportedEntry<T>(packageReference: PackageReference): Observable<T> {
  const { packageName, exportedEntryName } = packageReference;
  return deferPromise(() => import(packageName)).pipe(
    map(exportedEntries => exportedEntries[exportedEntryName]),
    throwUnless(isDefined, () => new Error(`welp... no ${exportedEntryName} in ${packageName}`))
  );
}
