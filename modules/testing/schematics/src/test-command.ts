import { tapNext } from '@komore/reactive';

import { type TestArguments } from './test-arguments';
import { type TestFlags } from './test-flags';

/**
 * Test command
 *
 * @param $ Arguments and flags
 */
export function testCommand($: Observable<[args: TestArguments, flags: TestFlags]>) {
  return $.pipe(tapNext(value => console.log('weee', value)));
}
