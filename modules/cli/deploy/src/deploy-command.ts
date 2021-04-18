import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { DeployArguments } from './deploy-arguments';
import type { DeployFlags } from './deploy-flags';

/**
 * Deploy command
 * @param $ Arguments and flags
 */
export function deployCommand($: Observable<[args: DeployArguments, flags: DeployFlags]>) {
  return $.pipe(
    tapValue(value => console.log('deploy', value))
  );
}
