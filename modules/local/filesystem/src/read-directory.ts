import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive/promise';
import type { BaseEncodingOptions, Dirent, PathLike } from 'fs';
import { readdir } from 'fs/promises';

/**
 * Reads a directory
 * @param directoryPath Directory path
 * @param options Options
 * @returns List of file paths
 */
export function readDirectory(
  directoryPath: PathLike,
  options?: BaseEncodingOptions & { readonly withFileTypes?: false }
): Observable<ReadonlyArray<string>>;

/**
 * Reads a directory
 * @param directoryPath Directory path
 * @param options Options with file types enabled
 * @returns List of directory entries
 */
export function readDirectory(
  directoryPath: PathLike,
  options: BaseEncodingOptions & { readonly withFileTypes: true }
): Observable<ReadonlyArray<Dirent>>;

export function readDirectory(
  directoryPath: PathLike,
  options?: BaseEncodingOptions & { readonly withFileTypes?: boolean }
): Observable<ReadonlyArray<string>> | Observable<ReadonlyArray<Dirent>> {
  const encoding = options?.encoding ?? undefined;
  const withFileTypes = options?.withFileTypes ?? false;
  return withFileTypes
    ? deferPromise(() => readdir(directoryPath, { encoding, withFileTypes }))
    : deferPromise(() => readdir(directoryPath, { encoding, withFileTypes }));
}
