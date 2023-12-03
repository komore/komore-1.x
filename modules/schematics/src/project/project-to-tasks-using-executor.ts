import { defaultIfEmpty, first, forkJoin, map, type Observable } from '@komore/reactive';

import { type ExecutorReferenceString } from '../executor/reference/executor-reference-string';
import { taskByExecutor } from '../task/task-by-executor';
import { type TaskConfiguration } from '../task/task-configuration';
import { type ProjectConfiguration } from './project-configuration';

/**
 * Creates a function that returns a list of task configurations matching an executor reference string
 *
 * @param executorReferenceString Executor reference string
 * @returns Function that returns a list of task configurations matching the executor reference string
 */
export function projectToTasksUsingExecutor(
  executorReferenceString: ExecutorReferenceString
): (projectConfiguration: ProjectConfiguration) => Observable<ReadonlyArray<TaskConfiguration>> {
  const usingExecutor = taskByExecutor(executorReferenceString);
  return ({ tasks }) =>
    forkJoin([...tasks.values()].map(configuration => configuration.pipe(first()))).pipe(
      defaultIfEmpty([]),
      map(taskConfigurations => taskConfigurations.filter(usingExecutor))
    );
}
