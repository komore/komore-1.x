import type { Observable } from '@komore/reactive';
import type { WriteStream } from 'fs';
import { writeFileStream } from './write-file-stream';
import type { WriteFileStreamOptions } from './write-file-stream-options';

export function toFileStream(
  writeStream: WriteStream,
  options?: Partial<WriteFileStreamOptions>
): (data: unknown) => Observable<void> {
  return data => writeFileStream(writeStream, data, options);
}
