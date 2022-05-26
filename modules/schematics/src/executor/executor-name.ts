/**
 * Executor name
 */
export type ExecutorName = string & {
  readonly __tag_executorName: unique symbol;
};
