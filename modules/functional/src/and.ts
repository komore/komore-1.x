/**
 * Creates a function that returns true if all the other functions return true
 *
 * @param fns Functions
 * @returns `true` if all the wrapped functions return `true`, otherwise `false`
 * @template Parameters Parameters type
 */
export function and<Parameters extends ReadonlyArray<unknown>>(
  ...fns: ReadonlyArray<(...parameters: Parameters) => boolean>
): (...parameters: Parameters) => boolean {
  return (...parameters) => fns.every(fn => fn(...parameters));
}
