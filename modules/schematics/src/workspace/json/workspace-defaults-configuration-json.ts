import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Workspace defaults configuration JSON
 */
export interface WorkspaceDefaultsConfigurationJson {
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
  readonly tasks?: ReadonlyRecord<string, string>;
}
