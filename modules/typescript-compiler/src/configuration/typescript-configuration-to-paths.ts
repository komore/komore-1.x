import { objectValues } from '@komore/functional';
import { type ReadonlyRecord } from '@komore/typescript';

import { type TypeScriptConfiguration } from './typescript-configuration';

export function typeScriptConfigurationToPaths(
  typeScriptConfiguration: TypeScriptConfiguration
): ReadonlyRecord<string, string> {
  const { paths = {} } = typeScriptConfiguration.compilerOptions;
  const toFirstPaths = objectValues(typeScriptAliasPathListToPath);
  return toFirstPaths(paths);
}

/**
 * Returns the first path from a list of aliases
 *
 * @param aliases List of aliases
 * @returns First path
 */
function typeScriptAliasPathListToPath(aliases: ReadonlyArray<string>): string {
  return aliases[0] ?? '';
}
