import { createJsonSchemaValidator, type JsonSchemaDefinition } from '@komore/json';
import { cache } from '@komore/reactive';

import { type ProjectConfigurationJson } from './project-configuration-json';

/**
 * JSON project configuration schema validator
 */
export const projectConfigurationJsonSchemaValidator$ = createJsonSchemaValidator<ProjectConfigurationJson>({
  /*TODO*/
} as JsonSchemaDefinition).pipe(cache());
