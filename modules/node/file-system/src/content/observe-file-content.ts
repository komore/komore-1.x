import { type PathLike } from 'node:fs';

import { switchMap } from '@komore/reactive';

import { observeFile } from '../file/observe-file';
import { type ObserveFileContentOptions } from './observe-file-content-options';
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
 * @param options Options
 * @returns Observable that emits the entire file's content whenever it changes
 */
export function observeFileContent(filePath: PathLike, options: ObserveFileContentOptions): Observable<string>;

export function observeFileContent(
  filePath: PathLike,
  options?: ObserveFileContentOptions
): Observable<Buffer> | Observable<string> {
  const file$ = observeFile(filePath);
  return options === undefined
    ? file$.pipe(switchMap(changedFilePath => readFileContent(changedFilePath)))
    : file$.pipe(switchMap(changedFilePath => readFileContent(changedFilePath, options)));
}
