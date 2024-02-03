import { type PathLike } from 'node:fs';
import { readFile } from 'node:fs/promises';

import { deferPromise, throwIfError } from '@komore/reactive';

import { isNodeFileNotFoundError } from '../error/is-node-file-not-found-error';
import { nodeFileSystemError } from '../node-file-system.error';
import { type ReadFileContentOptions } from './read-file-content-options';

/**
 * Reads an entire file's content into memory
 *
 * @param filePath File path
 * @returns File content as a buffer
 */
export function readFileContent(filePath: PathLike): Observable<Buffer>;

/**
 * Reads an entire file's content into memory
 *
 * @param filePath File path
 * @param options Options
 * @returns File content as a string
 */
export function readFileContent(filePath: PathLike, options: ReadFileContentOptions): Observable<string>;

export function readFileContent(
  filePath: PathLike,
  options?: ReadFileContentOptions
): Observable<Buffer> | Observable<string> {
  const encoding = options?.encoding ?? null;
  return deferPromise(() => readFile(filePath, { encoding })).pipe(
    throwIfError(isNodeFileNotFoundError, () => nodeFileSystemError.fileNotFound({ filePath }))
  ) as Observable<Buffer> | Observable<string>;
}
