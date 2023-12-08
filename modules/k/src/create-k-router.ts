import { cliRoute, createCliRouter } from '@komore/cli/router';
import { validateProjectName, validateTaskName } from '@komore/schematics';

import { kCommand } from './k.command';

/**
 * k router
 */
export function createKRouter() {
  return createCliRouter([
      cliRoute('fetch-affected-base', {
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
      }),
      cliRoute('generate', {
        command: () => kCommand.runGenerator({}),
      }),
      cliRoute('list', {
        command: () => kCommand.list(),
        children: [
          cliRoute('executors', {
            command: () => kCommand.listExecutors(),
          }),
          cliRoute('generators', {
            command: () => kCommand.listGenerators(),
            description: 'List generators',
          }),
          cliRoute('packages', {
            command: () => kCommand.listPackages()
            description: 'List packages',
          })
        ]
      }),
      cliRoute('run :taskName :projectName?', {
        command: ({ parameters }) => {
          const { taskName, projectName } = parameters as { taskName: string; projectName: string };
          validateTaskName(taskName);
          validateProjectName(projectName);
          return kCommand.runExecutor({ taskName, projectName });
        },
        flags: {
          all: {
            defaultValue: false,
            description: 'Whether to run the task on all projects that feature it',
            parse: Boolean
          },
          parallel: {
            description: 'The maximum number of tasks to run in parallel',
            optional: true,
          }
        }
      }),
      cliRoute('validate', {
        command: () => kCommand.validateWorkspace(),
      }),
      cliRoute('version', {
        command: () => kCommand.displayVersion(),
      })
  ],
    {}
  );
}
