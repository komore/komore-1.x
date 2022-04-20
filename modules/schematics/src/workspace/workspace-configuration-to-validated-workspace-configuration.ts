import { InvalidWorkspaceConfigurationError } from './invalid-workspace-configuration-error';
import { type WorkspaceConfiguration } from './workspace-configuration';
import { type WorkspaceConfigurationSchemaVersion } from './workspace-configuration-schema-version';
import { workspaceConfigurationSchemaVersions } from './workspace-configuration-schema-versions';
import { workspaceConfigurationToValidated100WorkspaceConfiguration } from './workspace-configuration-to-validated-1.0.0-workspace-configuration';

/**
 * Validates a workspace configuration, adding default values where relevant
 *
 * @param workspaceConfiguration Workspace configuration
 * @returns Validated workspace configuration
 */
export function workspaceConfigurationToValidatedWorkspaceConfiguration(
  workspaceConfiguration: Partial<WorkspaceConfiguration>
): WorkspaceConfiguration {
  if (typeof workspaceConfiguration !== 'object') {
    throw new InvalidWorkspaceConfigurationError('invalid workspace JSON (must be an object)');
  }

  const version = workspaceConfiguration.version;
  if (version === undefined) {
    throw new InvalidWorkspaceConfigurationError('missing workspace schema version ("version" property)');
  }

  const schemaValidators: SchemaValidatorMap = {
    '@komore/schematics#1.0.0': workspaceConfigurationToValidated100WorkspaceConfiguration,
  };

  const schemaValidator = schemaValidators[version];
  if (schemaValidator === undefined) {
    const versions = workspaceConfigurationSchemaVersions.map(schemaVersion => `"${schemaVersion}"`).join(', ');
    const message = `unknown workspace schema version ("version" = "${version}", available: ${versions})`;
    throw new InvalidWorkspaceConfigurationError(message);
  }

  return schemaValidator({
    ...workspaceConfiguration,
    version,
  });
}

/**
 * Schema validator map
 */
type SchemaValidatorMap = {
  readonly [Version in WorkspaceConfigurationSchemaVersion]: SchemaValidator<Version>;
};

/**
 * Schema validator
 */
interface SchemaValidator<Version extends WorkspaceConfigurationSchemaVersion> {
  (
    workspaceConfig: Partial<Omit<WorkspaceConfiguration, 'version'>> & { readonly version: Version }
  ): WorkspaceConfiguration;
}
