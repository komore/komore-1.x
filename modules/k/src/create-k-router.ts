import { createCliRouter } from '@komore/cli/router';
import { asProjectName, asTaskName } from '@komore/schematics';

import { kCommand } from './k.command';

/**
 * k router
 */
export function createKRouter() {
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
      generate: {
        command: () => kCommand.runGenerator({}),
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
      run: {
        command: () => kCommand.runExecutor({ taskName: asTaskName('lint'), projectName: asProjectName('reactive') }),
      },
      validate: {
        command: () => kCommand.validateWorkspace(),
      },
      version: {
        command: () => kCommand.displayVersion(),
      },
    },
    {}
  );
}
