import { ErrorFromType } from '@komore/error';
import { fromEvent, map, tapNext } from '@komore/reactive';
import { runtimeHostError } from '@komore/runtime/host';

export function createNodeHostErrorObservable(): Observable<ErrorFromType<typeof runtimeHostError>> {
  return fromEvent(process, 'uncaughtException').pipe(
    map(error => error as Error),
    tapNext(() => (process.exitCode = 1)),
    map(thrownError =>
      runtimeHostError.unhandled({
        message: thrownError.message,
        source: { column: 0, line: 0, name: '?' },
        thrownError,
      })
    )
  );
}
