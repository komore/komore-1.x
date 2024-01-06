import { cliRoute, createCliRouter } from '@komore/cli/router';
import { asProjectName, asTaskName } from '@komore/schematics';

import { kCommand } from './k.command';

/**
 * k router
 */
export function createKRouter() {
  return createCliRouter(
    [
      cliRoute(
        'fetch-affected-base :branchName',
        'Fetch an affected base in order to perform affected commands',
        {
          flag: {
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
          path: {
            branchName: {
              defaultValue: 'main',
              description: 'Branch name',
              parse: String,
            },
          },
        },
        kCommand.fetchAffectedBase
      ),
      cliRoute(
        'generate :schematicName',
        'Generate files using schematics',
        {
          path: {
            schematicName: {
              description: 'Schematic name',
              parse: String,
            },
          },
        },
        kCommand.runGenerator
      ),
      cliRoute('list', 'Lists workspace information', kCommand.list),
      cliRoute('list executors', 'Lists workspace executors', kCommand.listExecutors),
      cliRoute('list generators', 'Lists workspace generators', kCommand.listGenerators),
      cliRoute('list packages', 'Lists workspace packages', kCommand.listPackages),
      cliRoute('list projects', 'Lists workspace projects', kCommand.listProjects),
      cliRoute(
        'run :taskName :projectName',
        'Run a task',
        {
          path: {
            taskName: {
              description: 'Task name',
              parse: asTaskName,
            },
            projectName: {
              description: 'Project name',
              optional: true,
              parse: asProjectName,
            },
          },
          flag: {
            all: {
              defaultValue: false,
              description: 'Whether to run the task on all projects that feature it',
              parse: Boolean,
            },
            parallel: {
              description: 'The maximum number of tasks to run in parallel',
              optional: true,
              parse: Number,
            },
          },
        },
        ({ taskName, projectName, all, parallel }) =>
          kCommand.runExecutor(all ? { taskName, all: true, parallel } : { taskName, projectName, parallel })
      ),
      cliRoute('validate', 'Validate the workspace', kCommand.validateWorkspace),
      cliRoute('version', 'Display workspace version information', kCommand.displayVersion),
    ],
    {}
  );
}
