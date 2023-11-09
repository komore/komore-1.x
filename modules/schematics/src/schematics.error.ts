import { createErrorType, errorProperties } from '@komore/error';

import { type ProjectName } from './project/name/project-name';
import { schematicsDomain } from './schematics.domain';
import { type TaskName } from './task/name/task-name';

/**
 * Schematics error group
 */
export const schematicsError = createErrorType(schematicsDomain, {
  invalidPackageManagerType: errorProperties<{ type: string }>(),
  invalidPackageName: errorProperties<{ packageName: string }>(),
  invalidProjectName: errorProperties<{ projectName: string }>(),
  invalidTaskDependency: errorProperties<{ dependency: string; taskName: TaskName }>(),
  invalidTaskExecutor: errorProperties<{ executor: string; taskName: TaskName }>(),
  invalidTaskName: errorProperties<{ value: unknown }>(),
  invalidTaskReferenceString: errorProperties<{ taskReferenceString: string }>(),
  invalidWorkspaceConfigurationJson: errorProperties<{ propertyPath: string; message: string }>(),
  packageManagerNotFound: errorProperties<{ lockFilePaths: string }>(),
  taskNotFound: errorProperties<{ projectName: ProjectName; taskName: TaskName }>(),
});
