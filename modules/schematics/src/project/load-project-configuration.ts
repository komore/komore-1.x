import { map, type Observable } from '@komore/reactive';
import { jsonProjectConfigurationToProjectConfiguration } from './json/json-project-configuration-to-project-configuration';
import { loadJsonProjectConfiguration } from './json/load-json-project-configuration';
import { type ProjectConfiguration } from './project-configuration';
import { type ProjectName } from './project-name';

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
  return loadJsonProjectConfiguration(projectConfigurationPath).pipe(
    map(jsonProjectConfigurationToProjectConfiguration(projectName, projectPath))
  );
}
