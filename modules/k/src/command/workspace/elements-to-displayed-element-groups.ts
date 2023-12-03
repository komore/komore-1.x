import { type DisplayedWorkspaceElement } from './displayed-workspace-element';
import { type DisplayedWorkspaceGroup } from './displayed-workspace-goup';

export function elementsToDisplayedElementGroups<T extends DisplayedWorkspaceElement>(
  elements: ReadonlyArray<T>
): ReadonlyArray<DisplayedWorkspaceGroup<T>> {
  return elements.reduce(
    (acc, workspaceElement) => {
      const { name } = workspaceElement.package;
      const groupIndex = acc.findIndex(group => group.name === name);
      return groupIndex === -1
        ? [
            ...acc,
            {
              name,
              elements: [workspaceElement],
            },
          ]
        : acc.map((group, i) =>
            i === groupIndex
              ? {
                  ...group,
                  elements: [...group.elements, workspaceElement],
                }
              : group
          );
    },
    [] as ReadonlyArray<DisplayedWorkspaceGroup<T>>
  );
}
