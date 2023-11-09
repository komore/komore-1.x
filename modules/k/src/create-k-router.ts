import { createCliRouter } from '@komore/cli/router';
import { type Logger } from '@komore/logging';

import { kCommand } from './k.command';

/**
 * k router
 */
export function createKRouter(options: { readonly logger: Logger }) {
  const { logger } = options;
  return createCliRouter(
    {
      'fetch-affected-base --branch-name=:branchName --depth=:depth --include-tags=:inludeTags': {
        command: (/*{ branchName, depth, includeTags }*/) =>
          kCommand.fetchAffectedBase({ branchName: 'test', depth: 42, includeTags: true }),
        flags: {
          branchName: {
            defaultValue: 'main',
            description: 'Branch name',
            parse: String,
          },
          depth: {
            defaultValue: 1,
            description: 'Fetch depth',
            parse: Number,
          },
          includeTags: {
            defaultValue: false,
            description: 'Whether git tags should be included',
            parse: Boolean,
          },
        },
      },
      'list executors': {
        command: () => kCommand.listExecutors(),
      },
      'list generators': {
        command: () => kCommand.listGenerators(),
      },
      'list packages': {
        command: () => kCommand.listPackages(),
      },
      list: {
        command: () => kCommand.list(),
      },
      validate: {
        command: () => kCommand.validateWorkspace(),
      },
      version: {
        command: () => kCommand.displayVersion(),
      },
    },
    {
      logger,
    }
  );
}
