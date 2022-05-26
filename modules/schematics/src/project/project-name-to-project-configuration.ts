import { isDefined } from '@komore/functional';
import { type Observable } from '@komore/reactive';
import { assert } from '@komore/runtime';
import { WorkspaceContext } from '../context/workspace-context';
import { ProjectConfiguration } from './project-configuration';
import { ProjectName } from './project-name';

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
  return projectName => {
    const projectConfiguration$ = byName.get(projectName);
    assert(isDefined(projectConfiguration$));
    return projectConfiguration$;
  };
}
