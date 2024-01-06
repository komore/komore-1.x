import { type PathLike } from 'node:fs';

import { type Observable } from '@komore/reactive';

import { readFileContent } from './read-file-content';
import { type ReadFileContentOptions } from './read-file-content-options';

/**
 * Creates a function that reads a file's content, given a file path
 *
 * @returns Function that reads a file's content, given a file path
 */
export function pathToFileContent(): (filePath: PathLike) => Observable<Buffer>;

/**
 * Creates a function that reads a file's content with a specific encoding, given a file path
 *
 * @param encoding Buffer encoding
 * @returns Function that reads a file's content with the specific encoding, given a file path
 */
export function pathToFileContent(options: ReadFileContentOptions): (filePath: PathLike) => Observable<string>;

export function pathToFileContent(
  options?: ReadFileContentOptions
): ((filePath: PathLike) => Observable<Buffer>) | ((filePath: PathLike) => Observable<string>) {
  return options !== undefined ? filePath => readFileContent(filePath, options) : filePath => readFileContent(filePath);
}
