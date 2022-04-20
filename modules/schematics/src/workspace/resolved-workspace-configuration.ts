import { type ReadonlyRecord } from '@komore/typescript';
import { type ProjectConfiguration } from '../project/project-configuration';
import { type WorkspaceConfiguration } from './workspace-configuration';

/**
 * Resolved workspace configuration
 */
export interface ResolvedWorkspaceConfiguration extends Omit<WorkspaceConfiguration, 'projects'> {
  /**
   * Workspace project configurations
   */
  readonly projects: ReadonlyRecord<string, ProjectConfiguration>;
}
