import { isString } from '@komore/string';

import { type ExecutorReferenceString } from './executor-reference-string';
import { executorReferenceStringRegExp } from './executor-reference-string-reg-exp';

/**
 * Tests whether a string is a valid executor reference string
 *
 * @param str String
 * @returns true if the string is a valid executor reference string
 */
export function isExecutorReferenceString(str: unknown): str is ExecutorReferenceString {
  return isString(str) && executorReferenceStringRegExp.test(str);
}
