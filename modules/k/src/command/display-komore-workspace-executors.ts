import { cliEvent, type CliEvent } from '@komore/cli';
import { arrayToArraySorted, each } from '@komore/collection';
import { map, take, tapNext, type Observable } from '@komore/reactive';
import { type WorkspaceContext, type WorkspaceExecutorDescriptor } from '@komore/schematics';

// TODO: remove
import chalk = require('chalk');

/**
 * Displays the list of komore executors available to the workspace
 *
 * @param workspaceContext Workspace context
 * @returns Stream of command-line interface events
 */
export function displayKomoreWorkspaceExecutors(workspaceContext: WorkspaceContext): Observable<CliEvent> {
  return workspaceContext.schematics.executor.list.pipe(
    take(1),
    map(executors => executors.reduce(executorsToExecutorGroups, [])),
    map(arrayToArraySorted(byName)),
    map(each(executorGroupToExecutorGroupWithSortedExecutors())),
    tapNext(executorGroups => {
      const longestExecutorName = executorGroups.reduce(
        (acc, executorGroup) => Math.max(acc, executorGroup.executors.reduce(toLongestExecutorName, 0), 0),
        0
      );
      executorGroups.forEach(executorGroup => {
        const groupName = chalk.greenBright(executorGroup.name);
        console.log(`  ${groupName}`);
        executorGroup.executors.forEach(executor => {
          const executorName = chalk.whiteBright(executor.name.padEnd(longestExecutorName, ' '));
          console.log(`  ${executorName} : ${executor.description}`);
        });
      });
    }),
    map(() => cliEvent.messageDisplayed({ message: 'weee' }))
  );
}

/**
 * Workspace executor group
 */
interface WorkspaceExecutorGroup {
  readonly name: string;
  readonly executors: ReadonlyArray<WorkspaceExecutorDescriptor>;
}

function executorsToExecutorGroups(
  acc: ReadonlyArray<WorkspaceExecutorGroup>,
  workspaceExecutor: WorkspaceExecutorDescriptor
): ReadonlyArray<WorkspaceExecutorGroup> {
  const { name } = workspaceExecutor.package;
  const groupIndex = acc.findIndex(group => group.name === name);
  return groupIndex === -1
    ? [
        ...acc,
        {
          name,
          executors: [workspaceExecutor],
        },
      ]
    : acc.map((group, i) =>
        i === groupIndex
          ? {
              ...group,
              executors: [...group.executors, workspaceExecutor],
            }
          : group
      );
}

function byName<T extends { readonly name: string }>(lhs: T, rhs: T): number {
  return lhs.name.localeCompare(rhs.name);
}

// TODO: remove when using flex
function toLongestExecutorName(acc: number, executor: WorkspaceExecutorDescriptor): number {
  return Math.max(acc, executor.name.length);
}

function executorGroupToExecutorGroupWithSortedExecutors(): (
  workspaceExecutorGroup: WorkspaceExecutorGroup
) => WorkspaceExecutorGroup {
  const toSortedExecutors = arrayToArraySorted(byName);
  return executorGroup => ({
    ...executorGroup,
    executors: toSortedExecutors(executorGroup.executors),
  });
}
