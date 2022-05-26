import { type JsonSchemaDefinition } from './schema/json-schema-definition';
import { type JsonSchemaOptions } from './schema/json-schema-options';

/**
 * Creates a function that creates a JSON schema definition, given JSON text
 *
 * @param options JSON schema options
 * @returns Function that creates a JSON schema definition, given JSON text
 */
export function jsonToJsonSchemaDefinition(
  _options?: JsonSchemaOptions
): (json: string) => JsonSchemaDefinition {
  // TODO
  return _jsonText => {
    return {} as JsonSchemaDefinition;
  };
}
