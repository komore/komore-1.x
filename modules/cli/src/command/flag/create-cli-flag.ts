import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliFlagDefinition } from './cli-flag-definition';

/**
 * Creates a CLI flag
 *
 * @param flagDefinition Flag definition
 * @returns CLI flag definition
 * @template TypeName Type name
 */
export function createCliFlag<TypeName extends CliParameterTypeName>(
  flagDefinition: Omit<CliFlagDefinition<TypeName, boolean>, 'required'>
): CliFlagDefinition<TypeName, false>;

/**
 * Creates a CLI flag
 *
 * @param flagDefinition Flag definition
 * @returns CLI flag definition
 * @template TypeName Type name
 */
export function createCliFlag<TypeName extends CliParameterTypeName, Required extends boolean>(
  flagDefinition: CliFlagDefinition<TypeName, Required>
): CliFlagDefinition<TypeName, Required>;

export function createCliFlag<FlagType extends CliParameterTypeName>(
  flagDefinition: Omit<CliFlagDefinition<FlagType, boolean>, 'required'> & { readonly required?: boolean }
): CliFlagDefinition<FlagType, false> | CliFlagDefinition<FlagType, boolean> {
  return {
    ...flagDefinition,
    required: flagDefinition.required ?? false,
  };
}
