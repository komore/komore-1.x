import { cliEvent } from '@komore/cli';
import { type EventFromType } from '@komore/event';
import { first, map, tapNext } from '@komore/reactive';
import { type WorkspaceContext } from '@komore/schematics';

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
        const displayedProjectName = projectName.padEnd(longestProjectName, ' ');
        console.log(`  ${displayedProjectName} : ${projectConfiguration.path}`);
      });
    }),
    map(() => cliEvent.messageDisplayed({ message: 'wooo projects done' }))
  );
}
