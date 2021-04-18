import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { TestArguments } from './test-arguments';
import type { TestFlags } from './test-flags';

/**
 * Test command
 * @param $ Arguments and flags
 */
export function testCommand($: Observable<[args: TestArguments, flags: TestFlags]>) {
  return $.pipe(
    tapValue(value => console.log('weee', value))
  );
}
