import { type Observable } from '@komore/reactive';

import { WorkspaceContext } from '../context/workspace-context';
import { ProjectName } from './name/project-name';
import { ProjectConfiguration } from './project-configuration';

/**
 * Creates a function that returns a project configuration, given a project name
 *
 * @param workspaceContext Workspace context
 * @returns Function that returns a project configuration, given a project name
 */
export function projectNameToProjectConfiguration(
  workspaceContext: WorkspaceContext
): (projectName: ProjectName) => Observable<ProjectConfiguration> {
  const byName = workspaceContext.project.byName;
  return projectName => byName.get(projectName);
}
