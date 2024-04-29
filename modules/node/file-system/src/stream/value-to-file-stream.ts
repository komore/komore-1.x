import { type WriteStream } from 'node:fs';

import { mapTo } from '@komore/reactive';

import { writeFileStream } from './write-file-stream';
import { type WriteFileStreamOptions } from './write-file-stream-options';

export function valueToFileStream(
  writeStream: WriteStream,
  options?: Partial<WriteFileStreamOptions>
): <T>(value: T) => Observable<T> {
  return value => writeFileStream(writeStream, value, options).pipe(mapTo(value));
}
