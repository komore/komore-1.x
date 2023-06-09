import { tapNext, type Observable } from '@komore/reactive';

import { type BuildArguments } from './build-arguments';
import { type BuildFlags } from './build-flags';

/**
 * Build command
 *
 * @param $ Arguments and flags
 */
export function buildCommand($: Observable<[args: BuildArguments, flags: BuildFlags]>) {
  return $.pipe(tapNext(value => console.log('build', value)));
}
