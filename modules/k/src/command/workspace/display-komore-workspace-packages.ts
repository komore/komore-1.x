import { cliEvent } from '@komore/cli';
import { type EventFromType } from '@komore/event';
import { first, map, tapNext } from '@komore/reactive';
import { type WorkspaceContext } from '@komore/schematics';

/**
 * Displays the list of packages in the workspace
 *
 * @param workspaceContext Workspace context
 * @returns Stream of command-line interface events
 */
export function displayKomoreWorkspacePackages(
  workspaceContext: WorkspaceContext
): Observable<EventFromType<typeof cliEvent>> {
  return workspaceContext.package.list.localWithPackageJson.pipe(
    first(),
    tapNext(localPackages => {
      const longestPackageName = localPackages.reduce((acc, { name }) => Math.max(acc, name.length), 0);
      localPackages.forEach(({ name, packageJson: { description = '' } }) => {
        const displayedPackageName = name.padEnd(longestPackageName, ' ');
        console.log(`  ${displayedPackageName} : ${description}`);
      });
    }),
    map(() => cliEvent.messageDisplayed({ message: 'wooo packages done' }))
  );
}
