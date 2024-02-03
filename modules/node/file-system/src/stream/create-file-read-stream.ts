import { createReadStream, type PathLike, type ReadStream } from 'node:fs';

import { isNodeFileNotFoundError } from '../error/is-node-file-not-found-error';
import { nodeFileSystemError } from '../node-file-system.error';

/**
 * Creates a file read stream
 *
 * @param filePath File path
 * @param options Read stream options
 * @returns Observable file read stream
 */
export function createFileReadStream(filePath: PathLike, options?: ReadStreamOptions): Observable<ReadStream> {
  return new Observable<ReadStream>(subscriber => {
    const readStream = createReadStream(filePath, options);

    readStream.on('end', () => subscriber.complete());
    readStream.on('error', e => {
      const error = isNodeFileNotFoundError(e) ? nodeFileSystemError.fileNotFound({ filePath }) : e;
      subscriber.error(error);
    });
    readStream.on('open', () => subscriber.next(readStream));

    subscriber.add(() => readStream.close());
  });
}

type ReadStreamOptions = Exclude<Parameters<typeof createReadStream>[1], string | undefined>;
