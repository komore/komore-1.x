import { type Observable } from '@komore/reactive';
import { type PathLike } from 'fs';
import { readFileContent } from './read-file-content';

/**
 * Creates a function that reads a file's content, given a file path
 * @returns Function that reads a file's content, given a file path
 */
export function pathToFileContent(): (filePath: PathLike) => Observable<Buffer>;

/**
 * Creates a function that reads a file's content with a specific encoding, given a file path
 * @param encoding Buffer encoding
 * @returns Function that reads a file's content with the specific encoding, given a file path
 */
export function pathToFileContent(encoding: BufferEncoding): (filePath: PathLike) => Observable<string>;

export function pathToFileContent(
  encoding?: BufferEncoding
): ((filePath: PathLike) => Observable<Buffer>) | ((filePath: PathLike) => Observable<string>) {
  if (encoding !== undefined) {
    return filePath => readFileContent(filePath, encoding);
  } else {
    return filePath => readFileContent(filePath);
  }
}
