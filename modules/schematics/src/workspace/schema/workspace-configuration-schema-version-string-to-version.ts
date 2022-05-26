import { assert } from '@komore/runtime';
import { type WorkspaceConfigurationSchemaVersionString } from './workspace-configuration-schema-version-string';
import { workspaceConfigurationSchemaVersionStringRegExp } from './workspace-configuration-schema-version-string-reg-exp';

/**
 * Returns a workspace configuration schema version, given a schema version string
 *
 * @param versionString Version string
 * @returns Version
 */
export function workspaceConfigurationSchemaVersionStringToVersion(
  versionString: WorkspaceConfigurationSchemaVersionString<number, number, number>
): string {
  const matches = versionString.match(workspaceConfigurationSchemaVersionStringRegExp) as
    | readonly [matched: string, version: string]
    | null;
  assert(matches !== null, `version string ${versionString} matches the schema version format`);
  const [, version] = matches;
  return version;
}
