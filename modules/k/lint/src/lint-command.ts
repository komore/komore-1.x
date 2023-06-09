import { type Observable, tapNext } from '@komore/reactive';
import { type LintArguments } from './lint-arguments';
import { type LintFlags } from './lint-flags';

/**
 * Lint command
 * @param $ Arguments and flags
 */
export function lintCommand($: Observable<[args: LintArguments, flags: LintFlags]>) {
  return $.pipe(
    tapNext(value => console.log('lint', value))
  );
}
