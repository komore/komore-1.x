import { type PackageName } from '../../package/name/package-name';

/**
 * Executor reference string
 */
export type ExecutorReferenceString = `${PackageName}:${string}` & {
  readonly __tag_executorReferenceString: unique symbol;
};
