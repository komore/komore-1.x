import { mergeMap } from '@komore/reactive';
import { createWorkspaceExecutor, createWorkspaceExecutorFactory } from '@komore/schematics';

import { buildNodeModule } from './build-node-module';
import { type BuildNodeModuleExecutorOptions } from './build-node-module-executor-options';

/**
 * Build Node module executor factory
 */
export const createBuildNodeModuleExecutor = createWorkspaceExecutorFactory<BuildNodeModuleExecutorOptions>(() =>
  createWorkspaceExecutor(options$ =>
    options$.pipe(
      mergeMap(({ entryPoint, outputPath, taskId, tsConfig }) =>
        buildNodeModule({
          paths: {
            entryPoint,
            outputPath,
            tsConfig,
          },
          taskId,
        })
      )
    )
  )
);
