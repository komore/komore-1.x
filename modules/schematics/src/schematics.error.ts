import { createErrorGroup, errorProperties } from '@komore/error';

import { type ProjectName } from './project/name/project-name';
import { schematicsDomain } from './schematics.domain';
import { type TaskName } from './task/name/task-name';

/**
 * Schematics error group
 */
export const schematicsError = createErrorGroup(schematicsDomain, {
  'package.manager.not-found': errorProperties<{ lockFilePaths: string }>(),
  'package.manager.type.invalid': errorProperties<{ type: string }>(),
  'package.name.invalid': errorProperties<{ packageName: string }>(),
  'project.name.invalid': errorProperties<{ projectName: string }>(),
  'task.dependency.invalid': errorProperties<{ dependency: string; taskName: TaskName }>(),
  'task.executor.invalid': errorProperties<{ executor: string; taskName: TaskName }>(),
  'task.name.invalid': errorProperties<{ value: unknown }>(),
  'task.not-found': errorProperties<{ projectName: ProjectName; taskName: TaskName }>(),
  'task.reference.invalid.string': errorProperties<{ taskReferenceString: string }>(),
  'workspace.configuration.invalid.json': errorProperties<{ propertyPath: string; message: string }>(),
});
