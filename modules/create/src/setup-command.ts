import { createCliArgument, createCliCommand, createCliFlag } from '@komore/cli';
import { mapTo, tapNext } from '@komore/reactive';

/**
 * Setup command
 */
export const setupCommand = createCliCommand(
  'setup',
  $ =>
    $.pipe(
      tapNext(({ args, flags: { help, scope, version } }) => {
        console.log('help', help);
        console.log('scope', scope);
        console.log('version', version);
        console.log('args', args);
      }),
      mapTo(0)
    ),
  {
    description: 'Create a komore-based repository',
    args: [
      createCliArgument('name', {
        description: 'Project name',
        required: true,
        type: 'string',
      }),
    ],
    flags: {
      help: createCliFlag({
        character: 'h',
        description: 'Print the CLI flags',
      }),
      scope: createCliFlag({
        character: 's',
        description: 'Scope for the modules (e.g. @my-project)',
        type: 'string',
      }),
      version: createCliFlag({
        character: 'v',
        description: 'Print the version',
      }),
    },
  }
);
