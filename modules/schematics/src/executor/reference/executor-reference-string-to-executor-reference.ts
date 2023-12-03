import { validatePackageName } from '../../package/name/validate-package-name';
import { schematicsError } from '../../schematics.error';
import { validateExecutorName } from '../name/validate-executor-name';
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
    | readonly [matched: string, packageName: string, executorName: string]
    | null;
  if (matches === null) {
    throw schematicsError.invalidExecutorReferenceString({ executorReferenceString });
  }

  const [, packageName, executorName] = matches;

  validateExecutorName(executorName);
  validatePackageName(packageName);

  return {
    executorName,
    packageName,
  };
}
