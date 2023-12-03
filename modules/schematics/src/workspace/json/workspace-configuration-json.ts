import { type ReadonlyRecord } from '@komore/typescript';

import { type TaskConfigurationJson } from '../../task/json/task-configuration-json';
import { type workspaceConfigurationJson100SchemaVersionString } from './workspace-configuration-json-schema-version-string';
import { type WorkspaceLayoutConfigurationJson } from './workspace-layout-configuration-json';
import { type WorkspaceDefaultsConfigurationJson } from './workspace-defaults-configuration-json';
import { type WorkspacePackageConfigurationJson } from './workspace-package-configuration-json';
import { type WorkspaceTaskConfigurationJson } from './workspace-task-configuration-json';

/**
 * Workspace configuration JSON
 */
export interface WorkspaceConfigurationJson {
  /**
   * Defaults
   */
  readonly defaults?: WorkspaceDefaultsConfigurationJson;
  /**
   * Layout configuration
   */
  readonly layout?: WorkspaceLayoutConfigurationJson;
  /**
   * Package management settings
   */
  readonly package?: WorkspacePackageConfigurationJson;
  /**
   * Workspace project configuration paths
   */
  readonly projects?: ReadonlyRecord<string, string>;
  /**
   * Schematics configuration
   */
  readonly schematics?: ReadonlyRecord<string, unknown>;
  /**
   * Task configuration
   */
  readonly task?: WorkspaceTaskConfigurationJson;
  /**
   * Workspace tasks
   */
  readonly tasks?: ReadonlyRecord<string, TaskConfigurationJson>;
  /**
   * Workspace configuration schema version
   */
  readonly version?: typeof workspaceConfigurationJson100SchemaVersionString;
}
