import { type ReadonlyRecord } from '@komore/typescript';

import { type TaskConfigurationJson } from '../../task/json/task-configuration-json';

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
  readonly tasks?: ReadonlyArray<string> | ReadonlyRecord<string, string | TaskConfigurationJson>;
}
