import { type workspaceConfigurationSchemaVersions } from './workspace-configuration-schema-versions';

/**
 * Workspace configuration schema verion
 */
export type WorkspaceConfigurationSchemaVersion = typeof workspaceConfigurationSchemaVersions[number];
