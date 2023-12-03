import { cliEvent, type CliEvent } from '@komore/cli';
import { concat, startWith, type Observable } from '@komore/reactive';
import { type WorkspaceContext } from '@komore/schematics';

import { displayKomoreWorkspaceExecutors } from './display-komore-workspace-executors';
import { displayKomoreWorkspaceGenerators } from './display-komore-workspace-generators';

/**
 * Displays all komore workspace elements, i.e. executors, generators, schematics, etc.
 *
 * @param workspaceContext Workspace context
 * @returns Stream of command-line interface events
 */
export function displayKomoreWorkspaceElements(workspaceContext: WorkspaceContext): Observable<CliEvent> {
  return concat([
    displayKomoreWorkspaceExecutors(workspaceContext).pipe(
      startWith(cliEvent.messageDisplayed({ message: 'Executors' }))
    ),
    displayKomoreWorkspaceGenerators(workspaceContext).pipe(
      startWith(cliEvent.messageDisplayed({ message: 'Generators' }))
    ),
  ]);
}
