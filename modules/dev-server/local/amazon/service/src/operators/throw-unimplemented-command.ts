import { HttpError, HttpStatuses } from '@komore/api/http';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { throwError } from '@komore/reactive';
import { mergeMap } from '@komore/reactive/operators';

export function throwUnimplementedCommand<T>(commandName: string): MonoTypeOperatorFunction<T> {
  return mergeMap(() =>
    throwError(() => new HttpError(HttpStatuses.NotImplemented, `command ${commandName} not implemented`))
  );
}
