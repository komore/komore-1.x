import { type ObservableMap } from '@komore/reactive';

import { type ProjectName } from '../project/name/project-name';
import { type ProjectConfiguration } from '../project/project-configuration';
import { type WorkspaceConfiguration } from '../workspace/workspace-configuration';
import { type WorkspaceContextPackage } from './workspace-context-package';
import { type WorkspaceContextSchematics } from './workspace-context-schematics';

/**
 * Workspace context
 */
export interface WorkspaceContext {
  /**
   * Base path
   */
  readonly basePath: string;
  /**
   * Workspace configuration
   */
  readonly configuration: WorkspaceConfiguration;
  /**
   * Package infomation
   */
  readonly package: WorkspaceContextPackage;
  /**
   * Project information
   */
  readonly project: {
    /**
     * Map of projects
     */
    readonly byName: ObservableMap<ProjectName, ProjectConfiguration>;
    /**
     * List of projects
     */
    readonly list: Observable<ReadonlyArray<readonly [projectName: ProjectName, configuration: ProjectConfiguration]>>;
  };
  /**
   * Schematics information
   */
  readonly schematics: WorkspaceContextSchematics;
  /**
   * TypeScript information
   */
  readonly ts: {
    /**
     * TypeScript configuration base
     */
    readonly tsConfigBase: Observable<unknown>;
  };
  /**
   * Whether watch workflows should be applied
   */
  readonly watch: boolean;
}
