import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive';
import type { PathLike } from 'fs';
import { readFile } from 'fs/promises';

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
  bufferEncoding?: BufferEncoding
): Observable<Buffer> | Observable<string> {
  const encoding = bufferEncoding ?? null;
  return deferPromise(() => readFile(filePath, { encoding })) as Observable<Buffer> | Observable<string>;
}
