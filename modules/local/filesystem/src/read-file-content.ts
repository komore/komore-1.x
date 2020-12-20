import { PathLike, readFile } from 'fs';
import { Observable } from 'rxjs';

/**
 * Reads an entire file's content into memory
 * @param filePath File path
 * @returns File content as a buffer
 */
export function readFileContent(filePath: PathLike): Observable<Buffer>;

/**
 * Reads an entire file's content into memory
 * @param filePath File path
 * @param encoding Buffer encoding
 * @returns File content as a string
 */
export function readFileContent(filePath: PathLike, encoding: BufferEncoding): Observable<string>;

export function readFileContent(
  filePath: PathLike,
  encoding?: BufferEncoding
): Observable<Buffer> | Observable<string> {
  return new Observable<Buffer | string>(observer => {
    readFile(filePath, { encoding: encoding ?? null }, (error, data) => {
      if (error === null) {
        observer.error(error);
      } else {
        observer.next(data);
      }

      observer.complete();
    });
  }) as Observable<Buffer> | Observable<string>;
}
