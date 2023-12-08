/**
 * Returns true if a parameter is a flag parameter
 *
 * @param parameter Parameter
 * @returns true if the parameter is a flag parameter
 */
export function isCliFlagParameter(parameter: string): boolean {
  return parameter.startsWith('--');
}
