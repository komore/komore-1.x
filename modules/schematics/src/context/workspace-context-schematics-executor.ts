import { type Observable } from '@komore/reactive';

import { type WorkspaceExecutorFactory } from '../executor/factory/workspace-executor-factory';
import { type WorkspaceExecutorDefaultTaskGeneratorFactory } from '../executor/workspace-executor-default-task-generator-factory';
import { type WorkspaceExecutorDescriptor } from '../executor/workspace-executor-descriptor';
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
  readonly defaultTaskGenerator: Observable<WorkspaceExecutorDefaultTaskGeneratorFactory>;
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
