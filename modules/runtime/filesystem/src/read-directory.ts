import { deferPromise, type Observable } from '@komore/reactive';
import { type Dirent, type ObjectEncodingOptions, type PathLike } from 'fs';
import { readdir } from 'fs/promises';

/**
 * Reads a directory
 * @param directoryPath Directory path
 * @param options Options
 * @returns List of file paths
 */
export function readDirectory(
  directoryPath: PathLike,
  options?: ObjectEncodingOptions & { readonly withFileTypes?: false }
): Observable<ReadonlyArray<string>>;

/**
 * Reads a directory
 * @param directoryPath Directory path
 * @param options Options with file types enabled
 * @returns List of directory entries
 */
export function readDirectory(
  directoryPath: PathLike,
  options: ObjectEncodingOptions & { readonly withFileTypes: true }
): Observable<ReadonlyArray<Dirent>>;

export function readDirectory(
  directoryPath: PathLike,
  options?: ObjectEncodingOptions & { readonly withFileTypes?: boolean }
): Observable<ReadonlyArray<string>> | Observable<ReadonlyArray<Dirent>> {
  const encoding = options?.encoding ?? undefined;
  const withFileTypes = options?.withFileTypes ?? false;
  return withFileTypes
    ? deferPromise(() => readdir(directoryPath, { encoding, withFileTypes }))
    : deferPromise(() => readdir(directoryPath, { encoding, withFileTypes }));
}
