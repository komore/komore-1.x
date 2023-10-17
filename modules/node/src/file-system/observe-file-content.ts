import { switchMap, type Observable } from '@komore/reactive';

import { type PathLike } from 'fs';

import { observeFile } from './observe-file';
import { readFileContent } from './read-file-content';

/**
 * Observes a file's content
 *
 * @param filePath File path
 * @returns Observable that emits the entire file's content whenever it changes
 */
export function observeFileContent(filePath: PathLike): Observable<Buffer>;

/**
 * Observes a file's content with a specific buffer encoding
 *
 * @param filePath File path
 * @param encoding Buffer encoding
 * @returns Observable that emits the entire file's content whenever it changes
 */
export function observeFileContent(filePath: PathLike, encoding: BufferEncoding): Observable<string>;

export function observeFileContent(
  filePath: PathLike,
  encoding?: BufferEncoding
): Observable<Buffer> | Observable<string> {
  const file$ = observeFile(filePath);
  return encoding === undefined
    ? file$.pipe(switchMap(changedFilePath => readFileContent(changedFilePath)))
    : file$.pipe(switchMap(changedFilePath => readFileContent(changedFilePath, encoding)));
}
