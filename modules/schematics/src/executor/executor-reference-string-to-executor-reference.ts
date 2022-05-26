import { type PackageName } from '../package/package-name';
import { type ExecutorName } from './executor-name';
import { type ExecutorReference } from './executor-reference';
import { type ExecutorReferenceString } from './executor-reference-string';
import { executorReferenceStringRegExp } from './executor-reference-string-reg-exp';

/**
 * Returns an executor reference, given an executor reference string
 *
 * @param executorReferenceString Executor reference string
 * @returns Executor reference
 */
export function executorReferenceStringToExecutorReference(
  executorReferenceString: ExecutorReferenceString
): ExecutorReference {
  const matches = executorReferenceString.match(executorReferenceStringRegExp) as
    | readonly [matched: string, packageName: PackageName, executorName: ExecutorName]
    | null;
  if (matches === null) {
    throw new Error(`invalid executor reference string "${executorReferenceString}"`);
  }

  const [, packageName, executorName] = matches;
  return {
    executorName,
    packageName,
  };
}
