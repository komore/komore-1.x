import { mergeMap } from '@komore/reactive';
import { createWorkspaceGenerator, createWorkspaceGeneratorFactory } from '@komore/schematics';

import { type ErrorTypeGeneratorOptions } from './error-type-generator-options';
import { generateErrorType } from './generate-error-type';

/**
 * Error type generator factory
 */
export const createErrorTypeGenerator = createWorkspaceGeneratorFactory<ErrorTypeGeneratorOptions>(() =>
  createWorkspaceGenerator((context, parameters$) =>
    parameters$.pipe(
      mergeMap(({ entryPoint, outputPath, taskId, tsConfig }) =>
        generateErrorType({
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
