import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { RunArguments } from './run-arguments';
import type { RunFlags } from './run-flags';

/**
 * Run command
 * @param $ Arguments and flags
 */
export function runCommand($: Observable<[args: RunArguments, flags: RunFlags]>) {
  return $.pipe(
    tapValue(value => console.log('run', value))
  );
}
