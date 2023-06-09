import { createErrorGroup, errorProperties } from '@komore/error';

import { schematicsDomain } from '../domain/schematics-domain';
import { type ProjectName } from '../project/project-name';
import { type TaskName } from './task-name';

/**
 * Invalid task configuration error
 */
const invalidTaskConfigurationError = createErrorGroup(schematicsDomain, '@komore/schematics/task/configuration');

export const invalidExecutorReference = invalidTaskConfigurationError(
  'task.executor.invalid',
  'task ${taskName} configuration uses invalid executor reference ${executor}',
  errorProperties<{ executor: string; taskName: TaskName }>()
);

export const invalidTaskName = invalidTaskConfigurationError(
  'task.name.invalid',
  'task name ${taskName} is not valid',
  errorProperties<{ taskName: string }>()
);

export const taskNotFound = invalidTaskConfigurationError(
  'task.not-found',
  'task ${taskName} not found in project ${projectName}',
  errorProperties<{ projectName: ProjectName; taskName: TaskName }>()
);
