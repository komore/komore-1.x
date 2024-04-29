import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { map, redactValue, tapNext, toArray } from '@komore/reactive';
import { applyTerraform } from '@komore/terraform';

import { terraformEvent } from '../terraform.event';
import { type TerraformCommandHandlerOptions } from './terraform-command-handler-options';
import { type TerraformCommandHandler } from './terraform-command-handler';

/**
 * Creates an Terraform command handler
 *
 * @param handlerOptions Terraform command handler options
 * @returns Terraform command handler
 */
export function createTerraformCommandHandler(handlerOptions: TerraformCommandHandlerOptions): TerraformCommandHandler {
  const { cliClient, toEvents } = handlerOptions;

  const apply = applyTerraform(cliClient);

  return command =>
    matchCommand(command, {
      apply: () =>
        apply({}).pipe(
          toArray(),
          map(() => terraformEvent.applied({}))
        ),
      destroy: () => execute('destroy', []),
      init: () => execute('init', []),
      plan: () => execute('plan', ['-detailed-exitcode', '-refresh=false']),
    }).pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), redactValue());
}
