import { type ExecutorReferenceString } from '../executor/reference/executor-reference-string';
import { type TaskReferenceString } from './reference/task-reference-string';
import { type TaskInput } from './task-input';
import { type TaskOutput } from './task-output';

/**
 * Task configuration
 *
 * @template OptionsType Options type
 */
export interface TaskConfiguration<OptionsType = unknown> {
  /**
   * Explicit list of dependencies
   */
  readonly dependencies: ReadonlyArray<TaskReferenceString>;
  /**
   * Executor used to implement the task
   */
  readonly executor: ExecutorReferenceString;
  /**
   * Explicit list of task inputs
   */
  readonly inputs: ReadonlyArray<TaskInput>;
  /**
   * Explicit list of task outputs
   */
  readonly outputs: ReadonlyArray<TaskOutput>;
  /**
   * Executor options
   */
  readonly options?: OptionsType;
}
