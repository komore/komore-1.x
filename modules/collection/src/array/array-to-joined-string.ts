import { type ArrayToJoinedStringOptions } from './array-to-joined-string-options';

export function arrayToJoinedString(options?: ArrayToJoinedStringOptions): (array: ReadonlyArray<unknown>) => string {
  const separator = options?.separator;
  return array => array.join(separator);
}
