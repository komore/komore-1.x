import { first, map } from '@komore/reactive';

import { type WorkspaceExecutorDefaultTaskGenerator } from '../executor/workspace-executor-default-task-generator';
import { type WorkspaceContext } from './workspace-context';
import { type WorkspaceContextSchematicsExecutor } from './workspace-context-schematics-executor';

export function workspaceContextSchematicsExecutorToDefaultTaskGenerator(
  workspaceContext: WorkspaceContext
): (executor: WorkspaceContextSchematicsExecutor) => Observable<WorkspaceExecutorDefaultTaskGenerator> {
  return executor =>
    executor.defaultTaskGenerator.pipe(
      first(),
      map(factory => factory(workspaceContext))
    );
}
