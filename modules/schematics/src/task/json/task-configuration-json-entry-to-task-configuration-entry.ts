import { map } from '@komore/reactive';

import { type WorkspaceContext } from '../../context/workspace-context';
import { schematicsError } from '../../schematics.error';
import { isTaskName } from '../name/is-task-name';
import { type TaskConfigurationEntry } from '../task-configuration-entry';
import { type TaskConfigurationJsonEntry } from './task-configuration-json-entry';
import { taskConfigurationJsonEntryToResolvedTaskConfiguration } from './task-configuration-json-entry-to-resolved-task-configuration';

/**
 * Creates a function that returns a valid task configuration entry, given a task configuration JSON entry
 *
 * @param workspaceContext Workspace context
 * @returns Function that returns a valid task configuration entry, given a task configuration JSON entry
 */
export function taskConfigurationJsonEntryToTaskConfigurationEntry(
  workspaceContext: WorkspaceContext
): (entry: TaskConfigurationJsonEntry) => Observable<TaskConfigurationEntry> {
  const toResolvedTaskConfigurationJson = taskConfigurationJsonEntryToResolvedTaskConfiguration(workspaceContext);

  return ([taskName, projectConfiguration, executorReferenceStringOrTaskConfigurationJson]) => {
    if (!isTaskName(taskName)) {
      throw schematicsError.invalidTaskName({ value: taskName });
    }

    return toResolvedTaskConfigurationJson(
      taskName,
      projectConfiguration,
      executorReferenceStringOrTaskConfigurationJson
    ).pipe(map(taskConfiguration => [taskName, taskConfiguration]));
  };
}
