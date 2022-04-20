import { createCliCommand } from '@komore/application-cli';
import { objectToEntries } from '@komore/functional';
import { map, mapTo, mergeMap, take, tapNext } from '@komore/reactive';
import { createWorkspaceContext } from '@komore/schematics';
import chalk = require('chalk');

/**
 * List projects command
 * TODO: sub-command of listCommand
 */
export const listProjectsCommand = createCliCommand(
  'list-projects',
  $ =>
    $.pipe(
      mergeMap(() => createWorkspaceContext(process.cwd())),
      mergeMap(workspaceContext =>
        workspaceContext.configuration.pipe(
          take(1),
          map(configuration => configuration.projects)
        )
      ),
      tapNext(projects => {
        const projectEntries = objectToEntries(projects);
        const longestProjectName = projectEntries.reduce((acc, [name]) => Math.max(acc, name.length), 0);

        projectEntries.forEach(([projectName, projectConfiguration]) => {
          const name = chalk.whiteBright(projectName.padEnd(longestProjectName, ' '));
          console.log(`  ${name} : ${projectConfiguration.projectType}`);
        });
      }),
      mapTo(0)
    ),
  {
    description: 'Lists projects',
  }
);
