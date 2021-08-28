import type { Observable } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import { createCommand } from '@komore/runtime/cli';
import { fromRange } from './from-range';

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

export default createCommand('fromRange', deployCommand, {
  args: {
    {
        name: 'moduleName',
        description: 'Module name',
        required: true
      }  
  },
  flags: {
  }
});
