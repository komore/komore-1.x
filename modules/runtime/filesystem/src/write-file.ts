import type { Observable } from '@komore/reactive';
import { defer, map } from '@komore/reactive';
import type { FileHandle } from 'fs/promises';
import type { WriteFileOptions } from './write-file-options';
import type { WriteFileOptionsWithEncoding } from './write-file-options-with-encoding';

export function writeFile<BufferType extends Uint8Array>(
  fileHandle: FileHandle,
  data: BufferType,
  options?: Partial<WriteFileOptions>
): Observable<number>;
export function writeFile(
  fileHandle: FileHandle,
  data: string,
  options?: Partial<WriteFileOptionsWithEncoding>
): Observable<number>;

export function writeFile<BufferType extends Uint8Array>(
  fileHandle: FileHandle,
  data: BufferType | string,
  options?: Partial<WriteFileOptionsWithEncoding>
): Observable<number> {
  const observable =
    typeof data === 'string'
      ? writeStringToFile(fileHandle, data, options)
      : writeBufferToFile(fileHandle, data, options);
  return observable.pipe(map(({ bytesWritten }) => bytesWritten));
}

function writeBufferToFile<BufferType extends Uint8Array>(
  fileHandle: FileHandle,
  data: BufferType,
  options?: Partial<WriteFileOptions>
): Observable<{ bytesWritten: number }> {
  const length = options?.bytesCount;
  const offset = options?.dataOffset;
  const position = options?.fileOffset;
  return defer(() => fileHandle.write(data, offset, length, position));
}

function writeStringToFile(
  fileHandle: FileHandle,
  data: string,
  options?: Partial<WriteFileOptionsWithEncoding>
): Observable<{ bytesWritten: number }> {
  const offset = options?.dataOffset;
  const bytesCount = options?.bytesCount;
  const encoding = options?.encoding;
  const position = options?.fileOffset;
  const preparedData = offset !== undefined || bytesCount !== undefined ? data.substr(offset ?? 0, bytesCount) : data;
  return defer(() => fileHandle.write(preparedData, position, encoding));
}
