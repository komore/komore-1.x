import { isErrorOfType } from '@komore/error';
import { nodeFileSystemError } from '@komore/node/file-system';
import { map, throwIfError, type Observable } from '@komore/reactive';

import { schematicsError } from '../schematics.error';
import { type WorkspaceContext } from '../context/workspace-context';
import { loadProjectConfigurationJson } from './json/load-project-configuration-json';
import { projectConfigurationJsonToProjectConfiguration } from './json/project-configuration-json-to-project-configuration';
import { type ProjectConfiguration } from './project-configuration';
import { type ProjectConfigurationOptions } from './project-configuration-options';

/**
 * Creates a function that loads a project configuration
 *
 * @param workspaceContext Workspace context
 * @returns Function that loads a project configuration
 */
export function loadProjectConfiguration(
  workspaceContext: WorkspaceContext
): (options: ProjectConfigurationOptions) => Observable<ProjectConfiguration> {
  const isFileNotFound = isErrorOfType(nodeFileSystemError.fileNotFound);
  const { projectFileNotFound } = schematicsError;
  const toProjectConfiguration = projectConfigurationJsonToProjectConfiguration(workspaceContext);
  return ({ projectName, projectPath, projectConfigurationPath: path }) =>
    loadProjectConfigurationJson(path).pipe(
      throwIfError(isFileNotFound, () => projectFileNotFound({ projectName, path })),
      map(toProjectConfiguration(projectName, projectPath))
    );
}
