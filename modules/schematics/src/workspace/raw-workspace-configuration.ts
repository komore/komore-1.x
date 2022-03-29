import { type ReadonlyRecord } from '@komore/typescript';
import { type ProjectConfiguration, type WorkspaceJsonConfiguration } from '@nrwl/devkit';

/**
 * Raw workspace JSON configuration
 */
export type RawWorkspaceJsonConfiguration = Omit<WorkspaceJsonConfiguration, 'projects'> & {
  readonly projects: ReadonlyRecord<string, ProjectConfiguration | string>;
};
