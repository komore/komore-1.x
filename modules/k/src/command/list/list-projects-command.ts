import { createCliCommand } from '@komore/application-cli';
import { mapTo, mergeMap, take, tapNext } from '@komore/reactive';
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
      mergeMap(({ project: { list } }) => list.pipe(take(1))),
      tapNext(projects => {
        const longestProjectName = projects.reduce((acc, [name]) => Math.max(acc, name.length), 0);

        projects.forEach(([projectName, projectConfiguration]) => {
          const name = chalk.whiteBright(projectName.padEnd(longestProjectName, ' '));
          console.log(`  ${name} : ${projectConfiguration.type}`);
        });
      }),
      mapTo(0)
    ),
  {
    description: 'Lists projects',
  }
);
