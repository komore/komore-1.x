import { join } from 'node:path';

import { first, map, mergeMap } from '@komore/reactive';
import { createWorkspaceExecutor, createWorkspaceExecutorFactory } from '@komore/schematics';

import { packageNodeModule } from './package-node-module';
import { type PackageNodeModuleExecutorOptions } from './package-node-module-executor-options';

/**
 * Package Node module executor factory
 */
export const createPackageNodeModuleExecutor = createWorkspaceExecutorFactory<PackageNodeModuleExecutorOptions>(
  ({ workspaceContext }) =>
    createWorkspaceExecutor(options$ =>
      options$.pipe(
        mergeMap(({ outputPath, packageJson, taskId }) =>
          workspaceContext.package.json.pipe(
            first(),
            map(workspacePackageJson => ({
              paths: {
                output: join(outputPath, 'package.json'),
                packageJson,
              },
              taskId,
              workspacePackageJson,
            }))
          )
        ),
        mergeMap(packageNodeModule)
      )
    )
);
