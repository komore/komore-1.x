import { type FileHandle } from 'node:fs/promises';

import { isString } from '@komore/string';
import { mapTo } from '@komore/reactive';

import { writeFileContent } from '../content/write-file-content';
import { writeFile } from './write-file';
import { type WriteFileOptions } from './write-file-options';
import { type WriteFileOptionsWithEncoding } from './write-file-options-with-encoding';

/**
 * Creates a function that writes buffers to a file
 *
 * @param fileHandle File path or handle
 * @param options Options
 * @returns Function that writes buffers to the file
 */
export function valueToFile(
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
export function valueToFile(
  fileHandle: FileHandle,
  options?: WriteFileOptionsWithEncoding
): (data: string) => Observable<number>;

/**
 * Creates a function that creates a file from a string or buffer
 *
 * @param filePath File path
 * @returns Function that creates a file from a string or buffer
 */
export function valueToFile(
  filePath: string
): <BufferType extends Uint8Array | string>(data: BufferType) => Observable<number>;

export function valueToFile(
  filePathOrHandle: string | FileHandle,
  options?: WriteFileOptions | WriteFileOptionsWithEncoding
): (<BufferType extends Uint8Array>(data: BufferType) => Observable<number>) | ((data: string) => Observable<number>) {
  if (isString(filePathOrHandle)) {
    const filePath = filePathOrHandle;
    return (data: Uint8Array | string) => writeFileContent(filePath, data).pipe(mapTo(data.length));
  } else {
    const fileHandle = filePathOrHandle;
    return (data: Uint8Array | string) => writeFile(fileHandle, data as string, options);
  }
}
