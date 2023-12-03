import { mergeMap } from '@komore/reactive';
import { createWorkspaceExecutor, createWorkspaceExecutorFactory } from '@komore/schematics';

import { lintModule } from './lint-module';
import { type LintModuleExecutorOptions } from './lint-module-executor-options';

/**
 * Lint module executor factory
 */
export const createLintModuleExecutor = createWorkspaceExecutorFactory<LintModuleExecutorOptions>(() =>
  createWorkspaceExecutor(options$ =>
    options$.pipe(
      mergeMap(({ eslintConfig, filesPattern, taskId, tsConfig, watch }) =>
        lintModule({
          paths: {
            eslintConfig,
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
