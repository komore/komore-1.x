import { isArray } from '@komore/collection';
import { entriesToObject, objectToEntries } from '@komore/functional';
import { defaultIfEmpty, forkJoin, map, type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type WorkspaceContext } from '../../context/workspace-context';
import { type TaskConfiguration } from '../../task/task-configuration';
import { type TaskConfigurationJsonEntry } from '../../task/json/task-configuration-json-entry';
import { taskConfigurationJsonEntryToTaskConfigurationEntry } from '../../task/json/task-configuration-json-entry-to-task-configuration-entry';
import { type ProjectTaskConfigurationsJson } from './project-task-configurations-json';

/**
 * Creates a function that returns project task configurations, given JSON project task configurations
 *
 * @param workspaceContext Workspace context
 * @param taskConfigurations Task configurations
 * @returns Function that returns project task configurations, given JSON project task configurations
 * @private
 */
export function projectTaskConfigurationsJsonToResolvedProjectTaskConfigurations(
  workspaceContext: WorkspaceContext
): (taskConfigurations: ProjectTaskConfigurationsJson) => Observable<ReadonlyRecord<string, TaskConfiguration>> {
  const toTaskConfigurationEntry = taskConfigurationJsonEntryToTaskConfigurationEntry(workspaceContext);
  return taskConfigurations => {
    const entries = isArray(taskConfigurations)
      ? taskConfigurations.map(taskNameOrEntryToEntry)
      : objectToEntries(taskConfigurations);
    const normalizedEntries = entries.map(toTaskConfigurationEntry);
    return forkJoin(normalizedEntries).pipe(map(entriesToObject), defaultIfEmpty({}));
  };
}

function taskNameOrEntryToEntry(taskNameOrEntry: string | TaskConfigurationJsonEntry): TaskConfigurationJsonEntry {
  return typeof taskNameOrEntry === 'string' ? [taskNameOrEntry, ''] : taskNameOrEntry;
}
