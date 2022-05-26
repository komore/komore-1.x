import { type ReadonlyRecord } from '@komore/typescript';
import { type ProjectName } from '../project/project-name';
import { type TaskConfiguration } from '../task/task-configuration';

/**
 * Workspace defaults configuration
 */
export interface WorkspaceDefaultsConfiguration {
  /**
   * Default output path
   */
  readonly outputPath: string;
  /**
   * Default project name
   */
  readonly project: ProjectName | undefined;
  /**
   * Default tasks
   */
  readonly tasks: ReadonlyRecord<string, string | TaskConfiguration>;
}
