// TODO: remove
import chalk = require('chalk');

import { cliEvent } from '@komore/cli';
import { first, map, tapNext, type Observable } from '@komore/reactive';
import { type WorkspaceContext } from '@komore/schematics';
import { EventFromType } from '@komore/event';

/**
 * Displays the list of komore generators available to the workspace
 *
 * @param workspaceContext Workspace context
 * @returns Stream of command-line interface events
 */
export function displayKomoreWorkspaceProjects(
  workspaceContext: WorkspaceContext
): Observable<EventFromType<typeof cliEvent>> {
  return workspaceContext.project.list.pipe(
    first(),
    tapNext(projects => {
      const longestProjectName = projects.reduce((acc, [projectName]) => Math.max(acc, projectName.length), 0);
      projects.forEach(([projectName, projectConfiguration]) => {
        const displayedProjectName = chalk.whiteBright(projectName.padEnd(longestProjectName, ' '));
        console.log(`  ${displayedProjectName} : ${projectConfiguration.path}`);
      });
    }),
    map(() => cliEvent.messageDisplayed({ message: 'wooo projects done' }))
  );
}
