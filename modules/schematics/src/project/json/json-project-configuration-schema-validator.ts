import { createJsonSchemaValidator, type JsonSchemaDefinition } from '@komore/json';
import { cache } from '@komore/reactive';
import { type JsonProjectConfiguration } from './json-project-configuration';

/**
 * JSON project configuration schema validator
 */
export const jsonProjectConfigurationSchemaValidator$ = createJsonSchemaValidator<JsonProjectConfiguration>({
  /*TODO*/
} as JsonSchemaDefinition).pipe(cache());
