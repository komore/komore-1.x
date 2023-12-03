import { cliEvent, type CliEvent } from '@komore/cli';
import { arrayToArraySorted, each } from '@komore/collection';
import { first, map, tapNext, type Observable } from '@komore/reactive';
import { type WorkspaceContext } from '@komore/schematics';

import { byName } from './by-name';
import { displayedElementGroupToDisplayedElementGroupWithSortedElements } from './displayed-element-group-to-displayed-element-group-with-sorted-elements';
import { displayedWorkspaceGroupsToConsole } from './displayed-workspace-groups-to-console';
import { elementsToDisplayedElementGroups } from './elements-to-displayed-element-groups';

/**
 * Displays the list of komore executors available to the workspace
 *
 * @param workspaceContext Workspace context
 * @returns Stream of command-line interface events
 */
export function displayKomoreWorkspaceExecutors(workspaceContext: WorkspaceContext): Observable<CliEvent> {
  return workspaceContext.schematics.executor.list.pipe(
    first(),
    map(elementsToDisplayedElementGroups),
    map(arrayToArraySorted(byName)),
    map(each(displayedElementGroupToDisplayedElementGroupWithSortedElements())),
    tapNext(displayedWorkspaceGroupsToConsole(console)),
    map(() => cliEvent.messageDisplayed({ message: 'weee executors done' }))
  );
}
