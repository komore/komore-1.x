import { stringToStyledText } from '@komore/cli';
import { type DisplayedWorkspaceElement } from './displayed-workspace-element';
import { type DisplayedWorkspaceGroup } from './displayed-workspace-goup';

export function displayedWorkspaceGroupsToConsole(
  console: Console
): <T extends DisplayedWorkspaceElement>(groups: ReadonlyArray<DisplayedWorkspaceGroup<T>>) => void {
  const toGreen = stringToStyledText({ color: ['green', 'bright'] });
  const toWhite = stringToStyledText({ color: ['white', 'bright'] });
  return executorGroups => {
    const longestElementName = executorGroups.reduce(
      (acc, executorGroup) =>
        Math.max(acc, executorGroup.elements.reduce(toLongestDisplayedWorkspaceElementName, 0), 0),
      0
    );
    executorGroups.forEach(executorGroup => {
      const groupName = toGreen(executorGroup.name);
      console.log(`  ${groupName}`);
      executorGroup.elements.forEach(executor => {
        const executorName = toWhite(executor.name.padEnd(longestElementName, ' '));
        console.log(`  ${executorName} : ${executor.description}`);
      });
    });
  };
}

function toLongestDisplayedWorkspaceElementName(acc: number, element: DisplayedWorkspaceElement): number {
  // TODO: remove when using flex
  return Math.max(acc, element.name.length);
}
