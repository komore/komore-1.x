import { join } from 'path';

import { mapTo, mergeMap, tapNext } from '@komore/reactive';
import { createWorkspaceExecutor, createWorkspaceExecutorFactory } from '@komore/schematics';

import { packageModule } from './package-module';
import { type PackageModuleExecutorOptions } from './package-module-executor-options';

/**
 * Package module executor factory
 */
export const createPackageModuleExecutor = createWorkspaceExecutorFactory<PackageModuleExecutorOptions>(() =>
  createWorkspaceExecutor(options$ =>
    options$.pipe(
      tapNext(parameters => {
        console.log('weeee', parameters);
      }),
      mergeMap(({ outputPath, packageJsonPath, workspacePackageJson }) =>
        packageModule({
          paths: {
            output: join(outputPath, 'package.json'),
            packageJson: packageJsonPath,
          },
          workspacePackageJson,
        })
      ),
      tapNext(res => console.log('wezultpkg', res)),
      mapTo(420)
    )
  )
);
