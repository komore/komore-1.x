// TODO: remove
import chalk = require('chalk');

import { type DisplayedWorkspaceElement } from './displayed-workspace-element';
import { type DisplayedWorkspaceGroup } from './displayed-workspace-goup';

export function displayedWorkspaceGroupsToConsole(
  console: Console
): <T extends DisplayedWorkspaceElement>(groups: ReadonlyArray<DisplayedWorkspaceGroup<T>>) => void {
  return executorGroups => {
    const longestElementName = executorGroups.reduce(
      (acc, executorGroup) =>
        Math.max(acc, executorGroup.elements.reduce(toLongestDisplayedWorkspaceElementName, 0), 0),
      0
    );
    executorGroups.forEach(executorGroup => {
      const groupName = chalk.greenBright(executorGroup.name);
      console.log(`  ${groupName}`);
      executorGroup.elements.forEach(executor => {
        const executorName = chalk.whiteBright(executor.name.padEnd(longestElementName, ' '));
        console.log(`  ${executorName} : ${executor.description}`);
      });
    });
  };
}

function toLongestDisplayedWorkspaceElementName(acc: number, element: DisplayedWorkspaceElement): number {
  // TODO: remove when using flex
  return Math.max(acc, element.name.length);
}
