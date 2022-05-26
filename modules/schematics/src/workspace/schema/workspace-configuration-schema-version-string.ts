import { createConstraintValidator, type ConstraintValidator } from '@komore/validation';

/**
 * Workspace configuration schema version string
 */
export type WorkspaceConfigurationSchemaVersionString<
  Major extends number,
  Minor extends number,
  Revision extends number
> = `@komore/schematics#${Major}.${Minor}.${Revision}` & {
  readonly __tag: unique symbol;
};

export function workspaceConfigurationSchemaVersionString<
  Major extends number,
  Minor extends number,
  Revision extends number
>(
  major: Major,
  minor: Minor,
  revision: Revision
): ConstraintValidator<
  WorkspaceConfigurationSchemaVersionString<number, number, number>,
  WorkspaceConfigurationSchemaVersionString<Major, Minor, Revision>
> {
  return createConstraintValidator(
    (value): value is WorkspaceConfigurationSchemaVersionString<Major, Minor, Revision> => true,
    'schematics.workspace.schema.version.exact',
    { major, minor, revision }
  );
}
