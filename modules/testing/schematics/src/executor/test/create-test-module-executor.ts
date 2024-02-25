import { mergeMap } from '@komore/reactive';
import { createWorkspaceExecutor, createWorkspaceExecutorFactory } from '@komore/schematics';

import { testModule } from './test-module';
import { type TestModuleExecutorOptions } from './test-module-executor-options';

/**
 * Test module executor factory
 */
export const createTestModuleExecutor = createWorkspaceExecutorFactory<TestModuleExecutorOptions>(() =>
  createWorkspaceExecutor(options$ =>
    options$.pipe(
      mergeMap(({ filesPattern, taskId, tsConfig, watch }) =>
        testModule({
          paths: {
            filesPattern,
            tsConfig,
          },
          taskId,
          watch,
        })
      )
    )
  )
);
