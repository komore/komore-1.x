import { type ReadonlyRecord } from '@komore/typescript';
import { type JsonTaskConfiguration } from '../../task/json/json-task-configuration';

/**
 * JSON workspace defaults configuration
 */
export interface JsonWorkspaceDefaultsConfiguration {
  /**
   * Default output path
   */
  readonly outputPath?: string;
  /**
   * Default project name
   */
  readonly project?: string;
  /**
   * Default tasks
   */
  readonly tasks?: ReadonlyRecord<string, string | JsonTaskConfiguration>;
}
