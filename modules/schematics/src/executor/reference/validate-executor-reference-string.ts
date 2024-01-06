import { schematicsError } from '../../schematics.error';
import { type ExecutorReferenceString } from './executor-reference-string';
import { isExecutorReferenceString } from './is-executor-reference-string';

/**
 * Assets that a string is a valid executor reference string
 *
 * @param str String
 */
export function validateExecutorReferenceString(str: string): asserts str is ExecutorReferenceString {
  if (!isExecutorReferenceString(str)) {
    throw schematicsError.invalidExecutorReferenceString({ executorReferenceString: str });
  }
}
