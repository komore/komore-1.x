import { FileHandle } from "fs/promises";

export function writeFile<BufferType extends Uint8Array>(fileHandle: FileHandle, bufferType: Uint8Array, ) {
  fileHandle.write()
}


write<TBuffer extends Uint8Array>(buffer: TBuffer, offset?: number | null, length?: number | null, position?: number | null): Promise<{ bytesWritten: number, buffer: TBuffer }>;

/**
 * Asynchronously writes `string` to the file.
 * The `FileHandle` must have been opened for writing.
 * It is unsafe to call `write()` multiple times on the same file without waiting for the `Promise`
 * to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.
 * @param string A string to write.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 */
write(data: string | Uint8Array, position?: number | null, encoding?: BufferEncoding | null): Promise<{ bytesWritten: number, buffer: string }>;
