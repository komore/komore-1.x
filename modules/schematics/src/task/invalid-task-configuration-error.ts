import { createError, createErrorClass, errorProps } from '@komore/error';
import { type ProjectName } from '../project/project-name';
import { type TaskName } from './task-name';

/**
 * Invalid task configuration error
 */
const InvalidTaskConfigurationError = createErrorClass(
  '@komore/schematics/task/configuration',
  'InvalidTaskConfigurationError'
);

export const InvalidTaskName = createError(InvalidTaskConfigurationError, 'task name ${taskName} is not valid', errorProps<{ taskName: string }>());

export const TaskNotFound = createError(InvalidTaskConfigurationError
  'task ${taskName} not found in project ${projectName}',
  errorProps<{ projectName: ProjectName; taskName: TaskName }>()
);
