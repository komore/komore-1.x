import { join } from 'path';

import { defer, of } from '@komore/reactive';
import { createWorkspaceExecutorDefaultTaskGenerator } from '@komore/schematics';

import { type BuildModuleExecutorOptions } from './build-module-executor-options';

/**
 * Build module default task generator
 */
export const createBuildModuleDefaultTask = createWorkspaceExecutorDefaultTaskGenerator<BuildModuleExecutorOptions>(
  (projectConfiguration, workspaceContext) => {
    const {
      basePath,
      configuration: {
        defaults: { outputPath },
      },
    } = workspaceContext;
    const { name: projectName } = projectConfiguration;
    return defer(() => {
      const projectRoot = join(basePath, projectConfiguration.path);
      return of({
        dependencies: [],
        inputs: [],
        outputs: [],
        options: {
          entryPoint: join(projectRoot, 'src', 'index.ts'),
          // TODO: build output path based on package.json name?
          outputPath: join(basePath, outputPath, projectName),
          packageJson: join(projectRoot, 'package.json'),
          sourceMap: true,
          // TODO: .application.json, .stack.json, .library.json
          tsConfig: join(projectRoot, `${projectName}.tsconfig.library.json`),
          watch: false,
        },
      });
    });
  }
);
