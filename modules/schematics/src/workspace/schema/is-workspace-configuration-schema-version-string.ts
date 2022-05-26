import { type WorkspaceConfigurationSchemaVersionString } from './workspace-configuration-schema-version-string';
import { workspaceConfigurationSchemaVersionStringRegExp } from './workspace-configuration-schema-version-string-reg-exp';

/**
 * Tests whether a string is a valid workspace configuration schema version string
 *
 * @param str String
 * @returns true if the string is a valid workspace configuration schema version string
 */
export function isWorkspaceConfigurationSchemaVersionString(
  str: string
): str is WorkspaceConfigurationSchemaVersionString<number, number, number> {
  return workspaceConfigurationSchemaVersionStringRegExp.test(str);
}
