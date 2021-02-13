import type { WriteStream } from 'fs';
import { MonoTypeOperatorFunction } from 'rxjs';
import { tap } from 'rxjs/dist/types/operators';

export function writeToStream<T>(writeStream: WriteStream): MonoTypeOperatorFunction<T> {
  return tap({
    next(value) {
      writeStream.write()
    }
  })
};
