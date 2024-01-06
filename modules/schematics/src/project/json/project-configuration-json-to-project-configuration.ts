import { ObservableMap } from '@komore/reactive';

import { type WorkspaceContext } from '../../context/workspace-context';
import { taskNameToResolvedTaskConfiguration } from '../../task/resolution/task-name-to-resolved-task-configuration';
import { type ProjectName } from '../name/project-name';
import { type ProjectConfiguration } from '../project-configuration';
import { asProjectTag } from '../tag/as-project-tag';
import { validateProjectType } from '../type/validate-project-type';
import { type ProjectConfigurationJson } from './project-configuration-json';

/**
 * Creates a function that returns a project configuration, given a project configuration JSON
 *
 * @param projectPath Project path
 * @returns Function that returns a project configuration, given a project configuration JSON
 */
export function projectConfigurationJsonToProjectConfiguration(
  workspaceContext: WorkspaceContext
): (
  projectName: ProjectName,
  projectPath: string
) => (projectConfigurationJson: ProjectConfigurationJson) => ProjectConfiguration {
  const toTaskConfiguration = taskNameToResolvedTaskConfiguration(workspaceContext);
  return (name, path) => projectConfigurationJson => {
    const { domain, tasks = [], type } = projectConfigurationJson;

    const tags = projectConfigurationJson.tags?.map(asProjectTag) ?? [];
    validateProjectType(type);

    const projectConfiguration: Omit<ProjectConfiguration, 'tasks'> = {
      domain,
      name,
      path,
      tags,
      type,
    };

    return {
      ...projectConfiguration,
      tasks: new ObservableMap(taskName => toTaskConfiguration(taskName, projectConfiguration, tasks)),
    };
  };
}
