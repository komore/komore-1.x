import { type Observable, switchMap } from '@komore/reactive';
import { type PathLike } from 'fs';
import { readFileContent } from './read-file-content';
import { observeFile } from './observe-file';

/**
 * Observes a file's content
 * @param filePath File path
 * @returns Observable that emits the entire file's content whenever it changes
 */
export function observeFileContent(filePath: PathLike): Observable<Buffer>;

/**
 * Observes a file's content with a specific buffer encodig
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
  if (encoding === undefined) {
    return file$.pipe(switchMap(changedFilePath => readFileContent(changedFilePath)));
  } else {
    return file$.pipe(switchMap(changedFilePath => readFileContent(changedFilePath, encoding)));
  }
}
