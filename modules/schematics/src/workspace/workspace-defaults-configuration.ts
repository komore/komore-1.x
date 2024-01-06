import { type ReadonlyRecord } from '@komore/typescript';

import { type ExecutorReferenceString } from '../executor/reference/executor-reference-string';
import { type ProjectName } from '../project/name/project-name';
import { type TaskName } from '../task/name/task-name';

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
  readonly tasks: ReadonlyRecord<TaskName, ExecutorReferenceString>;
  /**
   * Default temporary path
   */
  readonly tempPath: string;
}
