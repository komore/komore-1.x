import { type WorkspaceConfigurationSchemaVersionString } from './workspace-configuration-schema-version-string';

/**
 * Creates a workspace configuration schema version string
 *
 * @param major Major
 * @param minor Minor
 * @param revision Revision
 * @returns Workspace configuration schema version string
 */
export function createWorkspaceConfigurationSchemaVersionString<
  Major extends number,
  Minor extends number,
  Revision extends number
>(major: Major, minor: Minor, revision: Revision): WorkspaceConfigurationSchemaVersionString<Major, Minor, Revision> {
  return `@komore/schematics#${major}.${minor}.${revision}` as WorkspaceConfigurationSchemaVersionString<
    Major,
    Minor,
    Revision
  >;
}
