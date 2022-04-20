import { type TaskExecutorConfiguration } from './task-executor-configuration';
import { type TaskInput } from './task-input';
import { type TaskOutput } from './task-output';

/**
 * Task configuration
 */
export interface TaskConfiguration {
  /**
   * Executor used to implement the task
   */
  readonly executor: TaskExecutorConfiguration;
  /**
   * Explicit list of task inputs
   */
  readonly inputs: ReadonlyArray<TaskOutput>;
  /**
   * Explicit list of task outputs
   */
  readonly outputs: ReadonlyArray<TaskInput>;
  /**
   * Executor options
   */
  readonly options?: unknown;
}
