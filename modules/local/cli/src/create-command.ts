import type { Observable } from '@komore/reactive';
import { of } from '@komore/reactive';
import { Command } from '@oclif/command';
import type { args, Input, flags } from '@oclif/parser';
import type { CommandOptions } from './command-options';

export function createCommand<
  CommandName extends string,
  Arguments extends Record<string, unknown>,
  Flags extends Record<string, unknown>
>(
  commandName: CommandName,
  commandHandler: ($: Observable<[args: Arguments, flags: Flags]>) => Observable<unknown>,
  options: CommandOptions<Arguments, Flags>
): typeof Command {
  const wrapper = {
    [commandName]: class extends Command {
      async run() {
        const { args, flags } = this.parse(options);
        const $ = of([args, flags]);
        commandHandler($).pipe(

        );
        const command = 
        console.log('running on sunshine', args, flags);
        // TODO
      }
    }
  };

  return wrapper[commandName];
}
