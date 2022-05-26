import { map, take } from '@komore/reactive';
import { readPackageJson } from '@komore/runtime/node';
import { type WorkspaceExecutorOptionsProcessor } from '@komore/schematics';
import { join } from 'path';
import { type PackageModuleExecutorOptions } from './package-module-executor-options';
import { type PackageModuleExecutorOptionsSchema } from './package-module-executor-options-schema';

/**
 * Package module executor options processor
 *
 * @param taskConfiguration Task configuration
 * @param projectConfiguration Project configuration
 * @param workspaceContext Workspace context
 * @returns Processed task configuration
 */
export const packageModuleExecutorOptionsProcessor: WorkspaceExecutorOptionsProcessor<
  PackageModuleExecutorOptionsSchema,
  PackageModuleExecutorOptions
> = (taskConfiguration, projectConfiguration, workspaceContext) => {
  const { options } = taskConfiguration;
  const workspacePackageJsonPath = options?.workspacePackageJson;
  const buildTaskName = options?.buildTaskName ?? 'build';
  const basePath = projectConfiguration.path;
  const packageJsonPath = join(basePath, options?.packageJson ?? 'package.json');
  const workspacePackageJson$ =
    workspacePackageJsonPath !== undefined
      ? readPackageJson(workspacePackageJsonPath)
      : workspaceContext.package.json.pipe(take(1));

  // TODO: need to resolve task configurations, getting defaults from executors, to get proper build task options
  const entryPoint = 'index.js'; // TODO: infer from build task entry point
  const outputPath = options?.outputPath ?? join(basePath, 'build', projectConfiguration.name); // TODO: default to the build task output path

  return workspacePackageJson$.pipe(
    map(workspacePackageJson => ({
      ...taskConfiguration,
      inputs: [buildTaskName],
      outputs: [outputPath],
      options: {
        entryPoint,
        outputPath,
        packageJsonPath,
        workspacePackageJson,
      },
    }))
  );
};
