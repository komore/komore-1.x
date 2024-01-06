import { of } from '@komore/reactive';
import { createWorkspaceExecutorDefaultTaskGeneratorFactory } from '@komore/schematics';

import { type DocumentModuleExecutorOptions } from './document-module-executor-options';
import { projectConfigurationToDocumentModuleExecutorOptions } from './project-configuration-to-document-module-executor-options';

/**
 * Document module default task generator factory
 */
export const createDocumentModuleDefaultTask =
  createWorkspaceExecutorDefaultTaskGeneratorFactory<DocumentModuleExecutorOptions>(workspaceContext => {
    const { tempPath } = workspaceContext.configuration.defaults;
    const toDocumentModuleExecutorOptions = projectConfigurationToDocumentModuleExecutorOptions(tempPath);
    return projectConfiguration => {
      const options = toDocumentModuleExecutorOptions(projectConfiguration);
      const taskConfiguration = {
        dependencies: [],
        inputs: [options.entryPoint], // TODO: other files
        outputs: [options.outputPath],
        options,
      };
      return of(taskConfiguration);
    };
  });
