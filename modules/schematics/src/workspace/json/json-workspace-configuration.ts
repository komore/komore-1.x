import { type ReadonlyRecord } from '@komore/typescript';
import { type PackageManagerType } from '../../package/manager/package-manager-type';
import { type ProjectName } from '../../project/project-name';
import { type JsonTaskConfiguration } from '../../task/json/json-task-configuration';
import { type JsonTaskWorkspaceConfiguration } from './json-task-workspace-configuration';
import { type jsonWorkspaceConfiguration100SchemaVersionString } from './json-workspace-configuration-schema-version-string';
import { type JsonWorkspaceLayoutConfiguration } from './json-workspace-layout-configuration';
import { type JsonWorkspaceDefaultsConfiguration } from './json-worskspace-defaults-configuration';

/**
 * JSON workspace configuration
 */
export interface JsonWorkspaceConfiguration {
  /**
   * Defaults
   */
  readonly defaults?: JsonWorkspaceDefaultsConfiguration;
  /**
   * Layout configuration
   */
  readonly layout?: JsonWorkspaceLayoutConfiguration;
  /**
   * Package management settings
   */
  readonly package: {
    /**
     * Package manager type
     */
    readonly manager?: PackageManagerType;
    /**
     * Package scope
     */
    readonly scope: string;
  };
  /**
   * Workspace project configuration paths
   */
  readonly projects?: ReadonlyRecord<ProjectName, string>;
  /**
   * Schematics configuration
   */
  readonly schematics?: ReadonlyRecord<string, unknown>;
  /**
   * Task workspace configuration
   */
  readonly task?: JsonTaskWorkspaceConfiguration;
  /**
   * Workspace tasks
   */
  readonly tasks?: ReadonlyRecord<string, JsonTaskConfiguration>;
  /**
   * Workspace configuration schema version
   */
  readonly version: typeof jsonWorkspaceConfiguration100SchemaVersionString;
}
