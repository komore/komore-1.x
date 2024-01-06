import { mergeMap } from '@komore/reactive';
import { createWorkspaceExecutor, createWorkspaceExecutorFactory } from '@komore/schematics';

import { documentModule } from './document-module';
import { type DocumentModuleExecutorOptions } from './document-module-executor-options';

/**
 * Document module executor factory
 */
export const createDocumentModuleExecutor = createWorkspaceExecutorFactory<DocumentModuleExecutorOptions>(() =>
  createWorkspaceExecutor(options$ =>
    options$.pipe(
      mergeMap(({ entryPoint, outputPath, packageJson, taskId, tsConfig, tsConfigSpec, watch }) =>
        documentModule({
          paths: {
            entryPoint,
            outputPath,
            packageJson,
            tsConfig,
            ...(tsConfigSpec !== undefined ? { tsConfigSpec } : {}),
          },
          taskId,
          watch,
        })
      )
    )
  )
);
