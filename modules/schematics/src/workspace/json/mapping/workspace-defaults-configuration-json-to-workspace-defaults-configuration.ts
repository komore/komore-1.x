import { mapObjectEntries, objectToKeys } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ProjectName } from '../../../project/name/project-name';
import { validateProjectName } from '../../../project/name/validate-project-name';
import { schematicsError } from '../../../schematics.error';
import { type WorkspaceDefaultsConfiguration } from '../../workspace-defaults-configuration';
import { type WorkspaceDefaultsConfigurationJson } from '../workspace-defaults-configuration-json';
import { isExecutorReferenceString, isTaskName, type ExecutorReferenceString, type TaskName } from '@komore/schematics';

/**
 * Returns a workspace's defaults configuration, given a JSON workspace default configuration
 *
 * @param defaults Defaults configuration
 * @param defaultProjectName Default project name
 * @returns Workspace defaults configuration
 */
export function workspaceDefaultsConfigurationJsonToWorkspaceDefaultsConfiguration(
  defaults: WorkspaceDefaultsConfigurationJson | undefined,
  projects: ReadonlyRecord<ProjectName, string>
): WorkspaceDefaultsConfiguration {
  const outputPath = defaults?.outputPath ?? 'build';
  const project = defaults?.project ?? defaultProjectName(projects);
  const toTasks = mapObjectEntries(defaultTaskMappingJsonEntryToDefaultTaskMappingEntry);
  const tasks = toTasks(defaults?.tasks ?? {});

  if (project !== undefined) {
    validateProjectName(project);
  }

  return {
    outputPath,
    project,
    tasks,
  };
}

function defaultTaskMappingJsonEntryToDefaultTaskMappingEntry(
  entry: readonly [taskName: string, executorReferenceString: string]
): readonly [taskName: TaskName, executorReferenceString: ExecutorReferenceString] {
  const [taskName, executorReferenceString] = entry;
  if (!isTaskName(taskName)) {
    throw schematicsError.invalidTaskName({ value: taskName });
  }

  if (!isExecutorReferenceString(executorReferenceString)) {
    throw schematicsError.invalidExecutorReferenceString({ executorReferenceString });
  }

  return [taskName, executorReferenceString];
}

function defaultProjectName(projects: ReadonlyRecord<ProjectName, string>): string | undefined {
  return objectToKeys(projects)[0];
}
