import { map, type Observable } from '@komore/reactive';

import { loadProjectConfigurationJson } from './json/load-project-configuration-json';
import { projectConfigurationJsonToProjectConfiguration } from './json/project-configuration-json-to-project-configuration';
import { type ProjectName } from './name/project-name';
import { type ProjectConfiguration } from './project-configuration';

/**
 * Loads a project configuration
 *
 * @param projectName Project name
 * @param projectPath Project path
 * @param projectConfigurationPath Project configuraton path
 * @returns Project configuration
 */
export function loadProjectConfiguration(
  projectName: ProjectName,
  projectPath: string,
  projectConfigurationPath: string
): Observable<ProjectConfiguration> {
  return loadProjectConfigurationJson(projectConfigurationPath).pipe(
    map(projectConfigurationJsonToProjectConfiguration(projectName, projectPath))
  );
}
