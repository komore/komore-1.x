import { isString } from '@komore/string';

import { type GeneratorReferenceString } from './generator-reference-string';
import { generatorReferenceStringRegExp } from './generator-reference-string-reg-exp';

/**
 * Tests whether a string is a valid generator reference string
 *
 * @param str String
 * @returns true if the string is a valid generator reference string
 */
export function isGeneratorReferenceString(str: unknown): str is GeneratorReferenceString {
  return isString(str) && generatorReferenceStringRegExp.test(str);
}
