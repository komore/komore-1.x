import { InvalidWorkspaceConfigurationError } from './invalid-workspace-configuration-error';
import { type WorkspaceConfiguration } from './workspace-configuration';

/**
 * Validates a workspace configuration following the 1.0.0 schema
 *
 * @param workspaceConfiguration Workspace configuration
 * @returns Validated workspace configuration
 */
export function workspaceConfigurationToValidated100WorkspaceConfiguration(
  workspaceConfiguration: Partial<Omit<WorkspaceConfiguration, 'version'>> & {
    readonly version: '@komore/schematics#1.0.0';
  }
): WorkspaceConfiguration {
  const {
    defaults = {},
    layout = {},
    package: packageConfiguration = {
      manager: 'pnpm',
      scope: '',
    },
    projects = {},
    schematics = {},
    task: taskConfiguration,
    version,
  } = workspaceConfiguration;

  if (packageConfiguration.scope === '') {
    throw new InvalidWorkspaceConfigurationError('missing "package.scope" workspace configuration');
  }

  const task = validateTaskConfiguration(taskConfiguration);

  return {
    defaults,
    layout: {
      applications: 'modules',
      libraries: 'modules',
      stacks: 'stacks',
      ...layout,
    },
    package: packageConfiguration,
    projects,
    schematics,
    task,
    version,
  };
}

function validateTaskConfiguration(
  task: Partial<WorkspaceConfiguration['task']> | undefined
): WorkspaceConfiguration['task'] {
  if (task === undefined) {
    throw new InvalidWorkspaceConfigurationError('missing task workspace configuration');
  }

  const {
    runner = '@komore/schematics/runner:createTaskRunner',
    options = { cacheable: ['build', 'document', 'e2e', 'lint', 'test'], parallel: 1 },
  } = task;

  if (typeof runner !== 'string') {
    if (runner.main === undefined || runner.tsConfigPath === undefined) {
      throw new InvalidWorkspaceConfigurationError(
        'invalid task.runner workspace configuration: a runner must be a package name or an object with a TypeScript source and configuration'
      );
    }
  }

  return {
    runner,
    options,
  };
}
