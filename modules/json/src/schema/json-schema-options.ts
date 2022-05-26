import { type JsonSchemaFlavour } from './json-schema-flavour';

/**
 * JSON schema options
 */
export interface JsonSchemaOptions {
  /**
   * JSON schema flavour
   */
  readonly flavour: JsonSchemaFlavour;
}
