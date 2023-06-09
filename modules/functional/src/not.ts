/**
 * Creates a function that inverts the result of another function
 *
 * @param fn Function
 * @returns `false` if the wrapped function returns `true`, otherwise `true`
 * @template Parameters Parameters type
 */
export function not<Parameters extends ReadonlyArray<unknown>>(
  fn: (...parameters: Parameters) => boolean
): (...parameters: Parameters) => boolean {
  return (...parameters) => !fn(...parameters);
}
