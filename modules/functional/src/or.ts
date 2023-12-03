/**
 * Creates a function that returns `true` if any of the other functions return `true`
 *
 * If a function returns `true`, the following functions in the list will not be called.
 *
 * @param fns Functions
 * @returns `true` if any of the wrapped functions return `true`, otherwise `false`
 * @template Parameters Parameters type
 */
export function or<Parameters extends ReadonlyArray<unknown>>(
  ...fns: ReadonlyArray<(...parameters: Parameters) => boolean>
): (...parameters: Parameters) => boolean {
  return (...parameters) => fns.some(fn => fn(...parameters));
}
