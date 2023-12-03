import { of, type Observable } from '@komore/reactive';

import { type WorkspaceContext } from '../../context/workspace-context';
import { type ProjectConfiguration } from '../../project/project-configuration';
import { schematicsError } from '../../schematics.error';
import { type TaskName } from '../name/task-name';
import { isTaskReferenceString } from '../reference/is-task-reference-string';
import { taskReferenceStringToTaskReference } from '../reference/task-reference-string-to-task-reference';
import { executorReferenceStringToResolvedTaskConfiguration } from '../resolution/executor-reference-string-to-resolved-task-configuration';
import { taskNameToResolvedTaskConfiguration } from '../resolution/task-name-to-resolved-task-configuration';
import { type TaskConfiguration } from '../task-configuration';
import { type TaskConfigurationJson } from './task-configuration-json';
import { taskConfigurationJsonToTaskConfiguration } from './task-configuration-json-to-task-configuration';
import { isExecutorReferenceString } from '../../executor/reference/is-executor-reference-string';

/**
 * Creates a function that returns a valid task configuration, given a task configuration JSON entry
 *
 * @param workspaceContext Workspace context
 * @param projectConfiguration Project configuration
 * @returns Function that returns a valid task configuration, given a task configuration JSON entry
 */
export function taskConfigurationJsonEntryToResolvedTaskConfiguration(
  workspaceContext: WorkspaceContext
): (
  taskName: TaskName,
  projectConfiguration: ProjectConfiguration,
  executorReferenceStringOrTaskConfigurationJson?: string | TaskConfigurationJson
) => Observable<TaskConfiguration> {
  const resolveTaskName = taskNameToResolvedTaskConfiguration(workspaceContext);
  const resolveExecutorReferenceString = executorReferenceStringToResolvedTaskConfiguration(workspaceContext);
  return (taskName, projectConfiguration, executorReferenceStringOrTaskConfigurationJson) => {
    if (typeof executorReferenceStringOrTaskConfigurationJson === 'object') {
      const taskConfigurationJson = executorReferenceStringOrTaskConfigurationJson;
      const taskConfiguration = taskConfigurationJsonToTaskConfiguration(taskName)(taskConfigurationJson);
      return of(taskConfiguration);
    }

    const executorReferenceString = executorReferenceStringOrTaskConfigurationJson;
    if (executorReferenceString === undefined) {
      return resolveTaskName(taskName, projectConfiguration);
    } else if (isExecutorReferenceString(executorReferenceString)) {
      return resolveExecutorReferenceString(executorReferenceString, projectConfiguration);
    } else {
      throw schematicsError.invalidTaskReferenceString({ taskReferenceString: executorReferenceString });
    }
  };
}
