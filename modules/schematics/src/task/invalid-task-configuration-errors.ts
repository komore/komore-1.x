import { createErrorGroup, errorProperties } from '@komore/error';

import { schematicsDomain } from '../domain/schematics-domain';
import { type ProjectName } from '../project/project-name';
import { type TaskName } from './task-name';

/**
 * Invalid task configuration error
 */
const invalidTaskConfigurationError = createErrorGroup(schematicsDomain, '@komore/schematics/task/configuration');

export const InvalidTaskName = invalidTaskConfigurationError(
  'task.name.invalid',
  'task name ${taskName} is not valid',
  errorProperties<{ taskName: string }>()
);

export const TaskNotFound = invalidTaskConfigurationError(
  'task.not-found',
  'task ${taskName} not found in project ${projectName}',
  errorProperties<{ projectName: ProjectName; taskName: TaskName }>()
);
