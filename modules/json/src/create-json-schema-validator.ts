import { of, type Observable } from '@komore/reactive';
import { createValidator, type Validator } from '@komore/validation';
import { type JsonSchemaDefinition } from './schema/json-schema-definition';

/**
 * Creates a JSON schema validator for a JSON schema definition
 *
 * @param jsonSchemaDefinition JSON schema definition
 * @returns JSON schema validator
 */
export function createJsonSchemaValidator<T>(
  _jsonSchemaDefinition: JsonSchemaDefinition
): Observable<Validator<unknown, T>> {
  // TODO
  return of(createValidator($ => $) as Validator<unknown, T>);
}
