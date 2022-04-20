/**
 * Task reference string
 */
export type TaskReferenceString = `${string}:${string}` & { readonly __tag_taskReferenceString: symbol };
