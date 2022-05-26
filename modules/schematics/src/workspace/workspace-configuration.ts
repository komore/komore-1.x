import { type ReadonlyRecord } from '@komore/typescript';
import { type PackageManagerType } from '../package/manager/package-manager-type';
import { type ProjectName } from '../project/project-name';
import { type TaskConfiguration } from '../task/task-configuration';
import { type WorkspaceConfigurationSchemaVersionString } from './schema/workspace-configuration-schema-version-string';
import { type TaskWorkspaceConfiguration } from './task-workspace-configuration';
import { type WorkspaceDefaultsConfiguration } from './workspace-defaults-configuration';
import { type WorkspaceLayoutConfiguration } from './workspace-layout-configuration';

/**
 * Workspace configuration
 */
export interface WorkspaceConfiguration {
  /**
   * Defaults
   */
  readonly defaults: WorkspaceDefaultsConfiguration;
  /**
   * Layout configuration
   */
  readonly layout: WorkspaceLayoutConfiguration;
  /**
   * Package management settings
   */
  readonly package: {
    /**
     * Package manager type
     */
    readonly manager: PackageManagerType;
    /**
     * Package scope
     */
    readonly scope: string;
  };
  /**
   * Workspace project configurations
   */
  readonly projects: ReadonlyRecord<ProjectName, string>;
  /**
   * Schematics configuration
   */
  readonly schematics: ReadonlyRecord<string, unknown>;
  /**
   * Task workspace configuration
   */
  readonly task: TaskWorkspaceConfiguration;
  /**
   * Workspace tasks configuration
   */
  readonly tasks: ReadonlyRecord<string, TaskConfiguration>;
  /**
   * Workspace configuration schema version
   */
  readonly version: WorkspaceConfigurationSchemaVersionString<number, number, number>;
}
