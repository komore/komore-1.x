import { deferPromise, type Observable } from '@komore/reactive';
import { type FileHandle, type FileReadOptions, type FileReadResult } from 'fs/promises';

export function fileToBytes<T extends ArrayBufferView = Buffer>(
  options?: FileReadOptions<T>
): (file: FileHandle) => Observable<FileReadResult<T>> {
  return file => deferPromise(() => file.read(options));
}
