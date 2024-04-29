import { regExpError } from '../reg-exp.error';
import { isRegExpString } from './is-reg-exp-string';
import { RegExpString } from './reg-exp-string';

export function validateRegExpString(value: string): asserts value is RegExpString {
  if (!isRegExpString(value)) {
    throw regExpError.invalidRegExpString({ value });
  }
}
