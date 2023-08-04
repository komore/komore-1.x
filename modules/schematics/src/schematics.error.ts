import { createErrorCategory, errorProperties } from '@komore/error';

import { type ProjectName } from './project/name/project-name';
import { schematicsDomain } from './schematics.domain';
import { type TaskName } from './task/name/task-name';

/**
 * Schematics error category
 */
export const schematicsError = createErrorCategory(schematicsDomain, 'default', {
  'package.manager.not-found': [
    'no package manager could be detected (looked for: ${lockFilePaths})',
    errorProperties<{ lockFilePaths: string }>(),
  ],
  'package.manager.type.invalid': ['package manager type "${type}" is not valid', errorProperties<{ type: string }>()],
  'project.name.invalid': ['project name "${projectName}" is not valid', errorProperties<{ projectName: string }>()],
  'task.dependency.invalid': [
    'task "${taskName}" configuration uses invalid dependency reference $"{dependency}"',
    errorProperties<{ dependency: string; taskName: TaskName }>(),
  ],
  'task.executor.invalid': [
    'task "${taskName}" configuration uses invalid executor reference "${executor}"',
    errorProperties<{ executor: string; taskName: TaskName }>(),
  ],
  'task.name.invalid': ['task name "${value}" is not valid', errorProperties<{ value: unknown }>()],
  'task.not-found': [
    'task ${taskName} not found in project ${projectName}',
    errorProperties<{ projectName: ProjectName; taskName: TaskName }>(),
  ],
  'task.reference.invalid.string': [
    'invalid task reference string "${taskReferenceString}"',
    errorProperties<{ taskReferenceString: string }>(),
  ],
  'workspace.configuration.invalid.json': [
    'invalid value for JSON workspace property ${propertyPath}: ${message}',
    // TODO: propertyPath: DeepKeyOf<WorspaceConfigurationJson>
    errorProperties<{ propertyPath: string; message: string }>(),
  ],
});
