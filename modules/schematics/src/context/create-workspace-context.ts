import { cache, map, type Observable } from '@komore/reactive';
import { join } from 'path';
import { readTsConfigJson } from '../typescript/read-tsconfig-json';
import { loadWorkspaceConfiguration } from '../workspace/load-workspace-configuration';
import { buildWorkspaceContextPackage } from './build-workspace-context-package';
import { buildWorkspaceContextProject } from './build-workspace-context-project';
import { buildWorkspaceContextSchematics } from './build-workspace-context-schematics';
import { type WorkspaceContext } from './workspace-context';

/**
 * Creates a workspace context
 *
 * @param basePath Base path
 * @returns Workspace context
 */
export function createWorkspaceContext(basePath: string): Observable<WorkspaceContext> {
  return loadWorkspaceConfiguration(basePath).pipe(
    map(configuration => {
      // TODO: avoid hardcoded tsconfig.base.json path
      const tsConfigBasePath = join(basePath, 'conf/tsconfig.base.json');
      const tsConfigBase = readTsConfigJson(tsConfigBasePath).pipe(cache());
      const contextPackage = buildWorkspaceContextPackage(basePath, tsConfigBase, configuration);
      const project = buildWorkspaceContextProject(configuration, basePath);
      const schematics = buildWorkspaceContextSchematics(basePath, contextPackage);
      const workspaceContext: WorkspaceContext = {
        basePath,
        configuration,
        package: contextPackage,
        project,
        schematics,
        ts: {
          tsConfigBase,
        },
        watch: false,
      };
      return workspaceContext;
    })
  );
}
