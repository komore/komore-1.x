import { mergeMap } from '@komore/reactive';
import { createWorkspaceExecutor, createWorkspaceExecutorFactory } from '@komore/schematics';

import { type DeployStackExecutorOptions } from './deploy-stack-executor-options';

/**
 * Deploy stack executor factory
 */
export const createDeployStackExecutor = createWorkspaceExecutorFactory<DeployStackExecutorOptions>(() =>
  createWorkspaceExecutor(options$ =>
    options$.pipe(
      mergeMap(({ taskId }) =>
        deployStack({
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
