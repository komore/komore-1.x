import { createCliArgument as arg, createCliCommand, createCliFlag as flag } from '@komore/application-cli';
import { mapTo, tapNext } from '@komore/reactive';

/**
 * fetch-affected-base command definition
 */
export const fetchAffectedBaseCommand = createCliCommand(
  'fetch-affected-base',
  $ =>
    $.pipe(
      tapNext(() => console.log('git fetch --no-tags --depth=1 origin main')),
      mapTo(0)
    ),
  {
    description: 'Fetches a base branch in order to compute affected resources',
    args: [
      arg('branch', {
        // TODO: defaultValue: 'main',
        description: 'Branch name',
        type: 'string',
      }),
    ],
    flags: {
      depth: flag({
        // TODO: default: 1,
        description: 'Depth (TODO: describe)',
        type: 'number',
      }),
      includeTags: flag({
        description: 'Whether to include tags',
        type: 'boolean',
      }),
    },
  }
);
