import { type FileHandle } from 'fs/promises';

import { mapTo, type Observable } from '@komore/reactive';

import { writeFile } from './write-file';
import { writeFileContent } from './write-file-content';
import { type WriteFileOptions } from './write-file-options';
import { type WriteFileOptionsWithEncoding } from './write-file-options-with-encoding';

/**
 * Creates a function that writes buffers to a file
 *
 * @param fileHandle File path or handle
 * @param options Options
 * @returns Function that writes buffers to the file
 */
export function toFile(
  fileHandle: FileHandle,
  options?: WriteFileOptions
): <BufferType extends Uint8Array>(data: BufferType) => Observable<number>;

/**
 * Creates a function that writes strings to a file
 *
 * @param fileHandle File handle
 * @param options Options
 * @returns Function that writes strings to the file
 */
export function toFile(
  fileHandle: FileHandle,
  options?: WriteFileOptionsWithEncoding
): (data: string) => Observable<number>;

/**
 * Creates a function that creates a file from a string or buffer
 *
 * @param filePath File path
 * @returns Function that creates a file from a string or buffer
 */
export function toFile(
  filePath: string
): <BufferType extends Uint8Array | string>(data: BufferType) => Observable<number>;

export function toFile(
  filePathOrHandle: string | FileHandle,
  options?: WriteFileOptions | WriteFileOptionsWithEncoding
): (<BufferType extends Uint8Array>(data: BufferType) => Observable<number>) | ((data: string) => Observable<number>) {
  if (typeof filePathOrHandle === 'string') {
    const filePath = filePathOrHandle;
    return (data: Uint8Array | string) => writeFileContent(filePath, data).pipe(mapTo(data.length));
  } else {
    const fileHandle = filePathOrHandle;
    return (data: Uint8Array | string) => writeFile(fileHandle, data as string, options);
  }
}
