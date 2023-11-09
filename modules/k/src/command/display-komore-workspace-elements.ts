import { CliEvent } from '@komore/cli';
import { type Observable } from '@komore/reactive';
import { type WorkspaceContext } from '@komore/schematics';

import { displayKomoreWorkspaceExecutors } from './display-komore-workspace-executors';

/**
 * Displays all komore workspace elements, i.e. executors, generators, schematics, etc.
 *
 * @param workspaceContext Workspace context
 * @returns Stream of command-line interface events
 */
export function displayKomoreWorkspaceElements(workspaceContext: WorkspaceContext): Observable<CliEvent> {
  return displayKomoreWorkspaceExecutors(workspaceContext);
}
