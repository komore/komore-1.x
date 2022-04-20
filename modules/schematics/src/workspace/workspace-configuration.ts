import { type ReadonlyRecord } from '@komore/typescript';
import { type PackageManagerType } from '../package/package-manager-type';
import { type WorkspaceScriptOrPackage } from './workspace-script-or-package';

/**
 * Raw workspace configuration
 */
export interface WorkspaceConfiguration {
  /**
   * Defaults
   */
  readonly defaults: {
    /**
     * Default project name
     */
    readonly project?: string;
  };
  /**
   * Layout configuration
   */
  readonly layout: {
    /**
     * Base path for applications
     */
    readonly applications: string;
    /**
     * Base path for libraries
     */
    readonly libraries: string;
    /**
     * Base path for stacks
     */
    readonly stacks: string;
  };
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
   * Schematics
   */
  readonly schematics: ReadonlyRecord<string, unknown>;
  /**
   * Workspace projects with the path to their configuration
   */
  readonly projects: ReadonlyRecord<string, string>;
  /**
   * Task configuration
   */
  readonly task: {
    /**
     * Task runner configuration
     */
    readonly runner: WorkspaceScriptOrPackage;
    /**
     * Task options
     */
    readonly options: {
      /**
       * List of tasks that are considered cacheable
       */
      readonly cacheable: ReadonlyArray<string>;
      /**
       * Maximum parallelism when running tasks
       */
      readonly parallel: number;
    };
  };
  /**
   * Workspace version
   */
  readonly version: '@komore/schematics#1.0.0';
}
