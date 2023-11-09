import { type FileHandle, type FileReadOptions, type FileReadResult } from 'fs/promises';

import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Creates a function that returns bytes from a file
 *
 * @param options File reading options
 * @returns Function that returns bytes from a file
 * @template BufferType Buffer type
 */
export function fileToBytes<BufferType extends NodeJS.ArrayBufferView = Buffer>(
  options?: FileReadOptions<BufferType>
): (file: FileHandle) => Observable<FileReadResult<BufferType>> {
  return file => deferPromise(() => file.read(options));
}
