/**
 * Returns an UUID v4 string
 * @returns UUID v4 string
 */
export function randomUUID(): string {
  return crypto.randomUUID();
}
