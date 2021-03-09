import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tap } from '@komore/reactive/operators';
import type { FileHandle } from 'fs/promises';

/**
 * Writes to a file
 * @param fileHandle File handle
 * @returns Operator function that writes the emitted buffer to the specified file handle
 * @template BufferType Buffer type
 */
export function writeToFile<BufferType extends Uint8Array>(
  fileHandle: FileHandle
): MonoTypeOperatorFunction<BufferType>;

/**
 * Writes to a file
 * @param fileHandle File handle
 * @param encoding Buffer encoding
 * @returns Operator function that writes an emitted buffer to the specified file handle using an optional buffer encoding
 */
export function writeToFile(fileHandle: FileHandle, encoding?: BufferEncoding): MonoTypeOperatorFunction<string>;

export function writeToFile<BufferType extends Uint8Array>(
  fileHandle: FileHandle,
  encoding?: BufferEncoding
): MonoTypeOperatorFunction<BufferType> | MonoTypeOperatorFunction<string> {
  if (encoding !== undefined) {
    return tap({
      next(value: string) {
        fileHandle.write(value, undefined, encoding);
      }
    });
  } else {
    return tap({
      next(value: BufferType) {
        fileHandle.write(value);
      }
    });
  }
}
