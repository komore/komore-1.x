import { type WriteStream } from 'fs';

import { Observable } from '@komore/reactive';

import { type WriteFileStreamOptions } from './write-file-stream-options';

export function writeFileStream(
  writeStream: WriteStream,
  data: unknown,
  options?: Partial<WriteFileStreamOptions>
): Observable<void> {
  return new Observable<void>(subscriber => {
    function notify() {
      subscriber.next();
      subscriber.complete();
    }
    function notifyError(error: Error | null | undefined) {
      if (error) {
        subscriber.error(error);
      }
    }

    const encoding = options?.encoding;
    const waitForDrain = !(encoding !== undefined
      ? writeStream.write(data, encoding, notifyError)
      : writeStream.write(data, notifyError));
    if (!waitForDrain) {
      writeStream.once('drain', notify);
    } else {
      notify();
    }
  });
}
