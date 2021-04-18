import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { LintArguments } from './lint-arguments';
import type { LintFlags } from './lint-flags';

/**
 * Lint command
 * @param $ Arguments and flags
 */
export function lintCommand($: Observable<[args: LintArguments, flags: LintFlags]>) {
  return $.pipe(
    tapValue(value => console.log('lint', value))
  );
}
