import { type Observable, tapNext } from '@komore/reactive';
import { type RunArguments } from './run-arguments';
import { type RunFlags } from './run-flags';

/**
 * Run command
 * @param $ Arguments and flags
 */
export function runCommand($: Observable<[args: RunArguments, flags: RunFlags]>) {
  return $.pipe(
    tapNext(value => console.log('run', value))
  );
}
