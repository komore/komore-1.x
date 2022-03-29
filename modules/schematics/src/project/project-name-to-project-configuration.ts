import { jsonToObject } from '@komore/functional';
import { map, of, throwError, type Observable } from '@komore/reactive';
import { readFileContent } from '@komore/runtime/node';
import { type ProjectConfiguration } from '@nrwl/devkit';
import { join } from 'path';
import { type RawWorkspaceJsonConfiguration } from '../workspace/raw-workspace-configuration';

/**
 * Creates a function that returns a project configuration from a workspace configuration, given a project name
 * @param workspaceConfiguration Workspace configuration
 * @returns Function that returns a project configuration from the workspace configuration, given a project name
 */
export function projectNameToProjectConfiguration(
  rawWorkspaceConfiguration: RawWorkspaceJsonConfiguration,
  relativeTo: string
): (projectName: string) => Observable<ProjectConfiguration> {
  return projectName => {
    const projectConfiguration = rawWorkspaceConfiguration.projects[projectName];
    if (projectConfiguration === undefined) {
      return throwError(() => new Error(`project ${projectName} not found in the workspace`));
    }

    if (typeof projectConfiguration === 'string') {
      const projectConfigurationPath = join(relativeTo, projectConfiguration, 'project.json');
      console.log('arite', projectConfigurationPath);
      return readFileContent(projectConfigurationPath, 'utf-8').pipe(map(jsonToObject<ProjectConfiguration>()));
    }

    return of(projectConfiguration);
  };
}
