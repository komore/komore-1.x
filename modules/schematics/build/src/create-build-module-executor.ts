import { mapTo, mergeMap, tapNext } from '@komore/reactive';
import { createWorkspaceExecutor, createWorkspaceExecutorFactory } from '@komore/schematics';
import { buildModule } from './build-module';
import { type BuildModuleExecutorOptions } from './build-module-executor-options';

/**
 * Build module executor factory
 */
export const createBuildModuleExecutor = createWorkspaceExecutorFactory<BuildModuleExecutorOptions>(() =>
  createWorkspaceExecutor(options$ =>
    options$.pipe(
      mergeMap(({ entryPoint, outputPath, tsConfig }) =>
        buildModule({
          paths: {
            entryPoint,
            output: outputPath,
            tsConfig,
          },
        })
      ),
      tapNext(res => console.log('wezult', res)),
      mapTo(420)
    )
  )
);
