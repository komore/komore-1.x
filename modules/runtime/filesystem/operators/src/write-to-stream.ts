import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tap } from '@komore/reactive/operators';
import type { WriteStream } from 'fs';

export function writeToStream<T>(writeStream: WriteStream): MonoTypeOperatorFunction<T> {
  return tap({
    next(value: T) {
      writeStream.write(value);
    }
  })
};
