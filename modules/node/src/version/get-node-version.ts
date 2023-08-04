/**
 * Returns the Node version
 * @returns Node version
 */
export function getNodeVersion(): string {
  const version = process.version;
  return version.startsWith('v') ? version.substring(1) : version;
}
