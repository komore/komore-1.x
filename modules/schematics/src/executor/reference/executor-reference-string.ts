/**
 * Executor reference string
 */
export type ExecutorReferenceString = `${string}:${string}` & { readonly __tag_executorReferenceString: unique symbol };
