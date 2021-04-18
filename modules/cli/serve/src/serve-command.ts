import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { ServeArguments } from './serve-arguments';
import type { ServeFlags } from './serve-flags';

/**
 * Serve command
 * @param $ Arguments and flags
 */
export function serveCommand($: Observable<[args: ServeArguments, flags: ServeFlags]>) {
  return $.pipe(
    tapValue(value => console.log('serve', value))
  );
}
