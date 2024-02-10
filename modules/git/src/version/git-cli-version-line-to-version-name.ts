/**
 * Returns the Git version name, given a Git CLI version line
 *
 * @param versionLine Git CLI version line
 * @returns Git version name
 * @private
 */
export function gitCliVersionLineToVersionName(versionLine: string): string {
  const matches = versionLine.match(/^git version (.+)$/) as readonly [matches: string, version: string] | null;
  if (matches === null) {
    throw new Error(`unsupported Git CLI version line "${versionLine}"`);
  }

  const [, version] = matches;

  return version;
}
