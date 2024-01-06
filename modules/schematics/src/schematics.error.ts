import { createErrorType, errorProperties } from '@komore/error';

import { type ExecutorName } from './executor/name/executor-name';
import { type GeneratorName } from './generator/name/generator-name';
import { type PackageName } from './package/name/package-name';
import { type ProjectName } from './project/name/project-name';
import { schematicsDomain } from './schematics.domain';
import { type TaskName } from './task/name/task-name';

/**
 * Schematics error group
 */
export const schematicsError = createErrorType(schematicsDomain, {
  defaultTaskNameNotFound: errorProperties<{ taskName: TaskName }>(),
  executorDefaultTaskGeneratorNotFound: errorProperties<{ executorName: ExecutorName }>(),
  executorDescriptorsNotFound: errorProperties<{ path: string }>(),
  executorFactoryNotFound: errorProperties<{ executorName: ExecutorName; path: string }>(),
  executorNotFound: errorProperties<{ executorName: ExecutorName; packageName: PackageName }>(),
  generatorDescriptorsNotFound: errorProperties<{ path: string }>(),
  generatorFactoryNotFound: errorProperties<{ generatorName: GeneratorName; path: string }>(),
  generatorNotFound: errorProperties<{ generatorName: GeneratorName; packageName: PackageName }>(),
  invalidExecutorName: errorProperties<{ executorName: string }>(),
  invalidExecutorReferenceString: errorProperties<{ executorReferenceString: string }>(),
  invalidGeneratorReferenceString: errorProperties<{ generatorReferenceString: string }>(),
  invalidPackageManagerType: errorProperties<{ type: string }>(),
  invalidPackageName: errorProperties<{ packageName: string }>(),
  invalidProjectName: errorProperties<{ value: unknown }>(),
  invalidProjectTag: errorProperties<{ projectTag: string }>(),
  invalidProjectType: errorProperties<{ projectType: string }>(),
  invalidTaskDependency: errorProperties<{ dependency: string; taskName: TaskName }>(),
  invalidTaskExecutor: errorProperties<{ executor: string; taskName: TaskName }>(),
  invalidTaskName: errorProperties<{ value: unknown }>(),
  invalidTaskReferenceString: errorProperties<{ taskReferenceString: string }>(),
  invalidWorkspaceConfigurationJson: errorProperties<{ propertyPath: string; message: string }>(),
  moduleExportNotFound: errorProperties<{ moduleName: string; entryName: string }>(),
  moduleNotFound: errorProperties<{ moduleName: string }>(),
  packageManagerNotFound: errorProperties<{ lockFilePaths: string }>(),
  packageNotFound: errorProperties<{ packageName: PackageName }>(),
  packageWithoutSchematics: errorProperties<{ packageName: PackageName }>(),
  projectFileNotFound: errorProperties<{ projectName: ProjectName; path: string }>(),
  projectNotFound: errorProperties<{ projectName: ProjectName }>(),
  projectTaskNotFound: errorProperties<{ projectName: ProjectName; taskName: TaskName }>(),
});
