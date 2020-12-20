import { PathLike } from 'fs';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { readFileContent } from './read-file-content';
import { watchFile } from './watch-file';

/**
 * Watches for file content changes
 * @param filePath File path
 * @returns Stream of full file content
 */
export function watchFileContent(filePath: PathLike): Observable<Buffer>;
export function watchFileContent(filePath: PathLike, encoding: BufferEncoding): Observable<string>;
export function watchFileContent(
  filePath: PathLike,
  encoding?: BufferEncoding
): Observable<Buffer> | Observable<string> {
  return watchFile(filePath).pipe(
    switchMap(changedFilePath =>
      encoding ? readFileContent(changedFilePath, encoding) : readFileContent(changedFilePath)
    )
  ) as Observable<Buffer> | Observable<string>;
}
