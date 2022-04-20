import { createCliArgument as arg, createCliCommand } from '@komore/application-cli';
import { mapTo, tapNext } from '@komore/reactive';

/**
 * generate command definition
 */
export const generateCommand = createCliCommand(
  'generate',
  $ =>
    $.pipe(
      tapNext(({ args: [resourceType] }) => {
        console.log('generate', resourceType);
        if (resourceType === undefined) {
          console.log('TODO: list available resource types');
        }
        // TODO: selection box
      }),
      mapTo(0)
    ),
  {
    aliases: ['g'],
    description: 'Runs a generator that creates and/or modifies resources',
    args: [
      arg('resourceType', {
        description: 'Resource type',
        type: 'string',
      }),
    ],
    flags: {},
  }
);
