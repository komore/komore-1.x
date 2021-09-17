/**
 * Returns true when executing in a secure context
 * @returns true if executing in a secure context
 */
export function isSecureContext(): boolean {
  return globalThis.isSecureContext;
}
