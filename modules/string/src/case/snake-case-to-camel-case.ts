/**
 * TODO
 *
 * @param str
 * @returns
 */
export function snakeCaseToCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, character) => character.toUpperCase());
}
