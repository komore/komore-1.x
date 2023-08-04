/**
 * Task configuration JSON
 *
 * @template OptionsType Options type
 */
export interface TaskConfigurationJson<OptionsType = undefined> {
  /**
   * Explicit list of task names or task reference strings
   */
  readonly dependencies?: ReadonlyArray<string>;
  /**
   * Executor used to implement the task
   */
  readonly executor: string;
  /**
   * Explicit list of task inputs
   */
  readonly inputs?: ReadonlyArray<string>;
  /**
   * Explicit list of task outputs
   */
  readonly outputs?: ReadonlyArray<string>;
  /**
   * Executor options
   */
  readonly options?: OptionsType;
}
