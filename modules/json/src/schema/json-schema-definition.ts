/**
 * JSON schema definition for revision 2020-12
 */
export interface JsonSchemaDefinition {
  /**
   * Schema resource identifier
   */
  readonly $id: string;
  /**
   * Schema dialect
   *
   * {@link https://json-schema.org/draft/2020-12/json-schema-core.html#rfc.section.8.1.1 8.1.1. The "$schema" keyword}
   */
  readonly $schema: string;
  /**
   * Vocabulary
   *
   * {@link https://json-schema.org/draft/2020-12/json-schema-core.html#rfc.section.8.1.2 8.1.2. The "$vocabulary" keyword}
   */
  readonly $vocabulary?: unknown;

  readonly title: string;
  readonly type: string;
}
