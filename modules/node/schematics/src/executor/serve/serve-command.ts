import { type Observable, tapNext } from '@komore/reactive';

import { type ServeArguments } from './serve-arguments';
import { type ServeFlags } from './serve-flags';

/**
 * Serve command
 * @param $ Arguments and flags
 */
export function serveCommand($: Observable<[args: ServeArguments, flags: ServeFlags]>) {
  return $.pipe(tapNext(value => console.log('serve', value)));
}
