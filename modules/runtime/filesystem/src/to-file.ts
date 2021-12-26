import { type Observable } from '@komore/reactive';
import { type FileHandle } from 'fs/promises';
import { writeFile } from './write-file';
import { type WriteFileOptions } from './write-file-options';
import { type WriteFileOptionsWithEncoding } from './write-file-options-with-encoding';

/**
 * Creates a function that writes buffers to a file
 * @param fileHandle File handle
 * @param options Options
 * @returns Function that writes buffers to the file
 */
export function toFile(
  fileHandle: FileHandle,
  options?: WriteFileOptions
): <BufferType extends Uint8Array>(data: BufferType) => Observable<number>;

/**
 * Creates a function that writes strings to a file
 * @param fileHandle File handle
 * @param options Options
 * @returns Function that writes strings to the file
 */
export function toFile(
  fileHandle: FileHandle,
  options?: WriteFileOptionsWithEncoding
): (data: string) => Observable<number>;

export function toFile(
  fileHandle: FileHandle,
  options?: WriteFileOptions | WriteFileOptionsWithEncoding
): (<BufferType extends Uint8Array>(data: BufferType) => Observable<number>) | ((data: string) => Observable<number>) {
  // NOTE: type checked is skipped as the overloads get in the way
  return (data: Uint8Array | string) => writeFile(fileHandle, data as string, options);
}
