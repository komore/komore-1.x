import { type ReadonlyRecord } from '@komore/typescript';

import { type ProjectName } from '../project/name/project-name';
import { type TaskName } from '../task/name/task-name';
import { type TaskConfiguration } from '../task/task-configuration';
import { type WorkspaceConfigurationSchemaVersionString } from './schema/workspace-configuration-schema-version-string';
import { type WorkspaceDefaultsConfiguration } from './workspace-defaults-configuration';
import { type WorkspaceLayoutConfiguration } from './workspace-layout-configuration';
import { type WorkspacePackageConfiguration } from './workspace-package-configuration';
import { type WorkspaceTaskConfiguration } from './workspace-task-configuration';

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
  readonly package: WorkspacePackageConfiguration;
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
  readonly task: WorkspaceTaskConfiguration;
  /**
   * Workspace tasks configuration
   */
  readonly tasks: ReadonlyRecord<TaskName, TaskConfiguration>;
  /**
   * Workspace configuration schema version
   */
  readonly version: WorkspaceConfigurationSchemaVersionString<number, number, number>;
}
