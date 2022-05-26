import { createCliCommand } from '@komore/application-cli';
import { map, mapEach, mapTo, mergeMap, take, tapNext } from '@komore/reactive';
import { createWorkspaceContext } from '@komore/schematics';
import chalk = require('chalk');
import { type WorkspaceExecutorDescriptor } from 'modules/schematics/src/executor/workspace-executor-descriptor';

/**
 * List executors command
 * TODO: sub-command of listCommand
 */
export const listExecutorsCommand = createCliCommand(
  'list-executors',
  $ =>
    $.pipe(
      mergeMap(() => createWorkspaceContext(process.cwd())),
      mergeMap(workspaceContext => workspaceContext.schematics.executor.list.pipe(take(1))),
      map(executors => executors.reduce(executorsToExecutorGroups, [])),
      map(executorGroups => [...executorGroups].sort(byName)),
      mapEach(executorGroup => ({
        ...executorGroup,
        executors: [...executorGroup.executors].sort(byName),
      })),
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
      mapTo(0)
    ),
  {
    description: 'Lists available workspace executors',
  }
);

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
