import { resolve } from 'node:path';

import { cache, map } from '@komore/reactive';
import { loadTypeScriptConfiguration } from '@komore/tsc';

import { loadWorkspaceConfiguration } from '../workspace/load-workspace-configuration';
import { buildWorkspaceContextPackage } from './build-workspace-context-package';
import { buildWorkspaceContextSchematics } from './build-workspace-context-schematics';
import { workspaceConfigurationToWorkspaceContextProject } from './workspace-configuration-to-workspace-context-project';
import { type WorkspaceContext } from './workspace-context';

/**
 * Creates a workspace context
 *
 * @param basePath Base path
 * @returns Workspace context
 */
export function createWorkspaceContext(basePath: string): Observable<WorkspaceContext> {
  const buildContextPackage = buildWorkspaceContextPackage(basePath);
  const buildContextSchematics = buildWorkspaceContextSchematics(basePath);
  // TODO: avoid hardcoded tsconfig.base.json path
  const tsConfigBasePath = resolve(basePath, 'conf', 'tsconfig.base.json');
  const tsConfigBase = loadTypeScriptConfiguration(tsConfigBasePath).pipe(cache());
  const buildWorkspaceContextProject = workspaceConfigurationToWorkspaceContextProject(basePath);

  // TODO: shouldn't be the one responsible for loading the workspace configuration
  return loadWorkspaceConfiguration(basePath).pipe(
    map(configuration => {
      const contextPackage = buildContextPackage(tsConfigBase, configuration);
      const schematics = buildContextSchematics(contextPackage);
      const watch = false;
      const workspaceContext: WorkspaceContext = {
        basePath,
        configuration,
        package: contextPackage,
        project: buildWorkspaceContextProject(configuration, () => workspaceContext),
        schematics,
        ts: {
          tsConfigBase,
        },
        watch,
      };

      return workspaceContext;
    })
  );
}
