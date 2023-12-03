import { arrayToArraySorted } from '@komore/collection';

import { byName } from './by-name';
import { type DisplayedWorkspaceElement } from './displayed-workspace-element';
import { type DisplayedWorkspaceGroup } from './displayed-workspace-goup';

export function displayedElementGroupToDisplayedElementGroupWithSortedElements<T extends DisplayedWorkspaceElement>(): (
  displayedWorkspaceGroup: DisplayedWorkspaceGroup<T>
) => DisplayedWorkspaceGroup<T> {
  const toSortedExecutors = arrayToArraySorted(byName);
  return group => ({
    ...group,
    elements: toSortedExecutors(group.elements),
  });
}
