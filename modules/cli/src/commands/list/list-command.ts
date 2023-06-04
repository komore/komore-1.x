import { createCliArgument as arg, createCliCommand, createCliFlag as flag } from '@komore/application-cli';
import { mapTo, mergeMap, tapNext } from '@komore/reactive';
import { createWorkspaceContext } from '@komore/schematics';

/**
 * List command definition
 */
export const listCommand = createCliCommand(
  'list',
  $ =>
    $.pipe(
      tapNext(({ args: [elementType], flags }) => {
        console.log('args', elementType);
        console.log('flags', flags);
      }),
      mergeMap(({ args, flags: { format } }) => {
        console.log('element type', args);
        console.log('format', format);
        return createWorkspaceContext(process.cwd()).pipe(
          tapNext(workspace => {
            console.log('list', workspace);
          })
        );
      }),
      mapTo(0)
    ),
  {
    aliases: ['l'],
    description: 'List elements from the workspace',
    args: [
      arg('elementType', {
        description: 'Type of element',
        // TODO: options: ['executors', 'generators', 'projects', 'schematics']
        type: 'string',
      }),
    ],
    flags: {
      format: flag({
        description: 'Output format',
        // TODO: options: ['json', 'html'],
        type: 'string',
      }),
    },
  }
);
