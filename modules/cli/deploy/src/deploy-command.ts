import { type Observable, tapNext } from '@komore/reactive';
import { type DeployArguments } from './deploy-arguments';
import { type DeployFlags } from './deploy-flags';

/**
 * Deploy command
 * @param $ Arguments and flags
 */
export function deployCommand($: Observable<[args: DeployArguments, flags: DeployFlags]>) {
  return $.pipe(
    tapNext(value => console.log('deploy', value))
  );
}
