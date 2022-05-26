import { type Observable } from '@komore/reactive';
import { type WorkspaceExecutorDefaultTaskGenerator } from '../executor/workspace-executor-default-task-generator';
import { type WorkspaceExecutorDescriptor } from '../executor/workspace-executor-descriptor';
import { type WorkspaceExecutorFactory } from '../executor/workspace-executor-factory';
import { type WorkspaceExecutorOptionsProcessor } from '../executor/workspace-executor-options-processor';

/**
 * Workspace context schematics executor
 *
 * @template OptionsType Options type
 */
export interface WorkspaceContextSchematicsExecutor<OptionsType = unknown> {
  /**
   * Default task generator
   */
  readonly defaultTaskGenerator: Observable<WorkspaceExecutorDefaultTaskGenerator>;
  /**
   * Descriptor
   */
  readonly descriptor: WorkspaceExecutorDescriptor;
  /**
   * Factory
   */
  readonly factory: Observable<WorkspaceExecutorFactory<OptionsType>>;
  /**
   * Options processor
   */
  readonly optionsProcessor: Observable<WorkspaceExecutorOptionsProcessor<OptionsType>>;
}
