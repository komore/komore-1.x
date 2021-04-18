import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { BuildArguments } from './build-arguments';
import type { BuildFlags } from './build-flags';

/**
 * Build command
 * @param $ Arguments and flags
 */
export function buildCommand($: Observable<[args: BuildArguments, flags: BuildFlags]>) {
  return $.pipe(
    tapValue(value => console.log('build', value))
  );
}
