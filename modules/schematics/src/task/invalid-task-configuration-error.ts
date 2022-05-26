import { createErrorClass, errorProps } from '@komore/error';
import { type ProjectName } from '../project/project-name';
import { type TaskName } from './task-name';

/**
 * Invalid task configuration error
 */
export const InvalidTaskConfigurationError = createErrorClass(
  '@komore/schematics/task/configuration',
  'InvalidTaskConfigurationError',
  {
    TASK_NOT_FOUND: errorProps<{ projectName: ProjectName; taskName: TaskName }>(),
  }
);
