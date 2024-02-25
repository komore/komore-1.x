import { of } from '@komore/reactive';

import { type HttpApiTypeScriptGenerator } from './http-api-typescript-generator';
import { type HttpApiTypeScriptGeneratorOptions } from './http-api-typescript-generator-options';

/**
 * Creates an HTTP API TypeScript generator
 *
 * @param generatorOptions HTTP API TypeScript generator options
 * @returns HTTP API TypeScript generator
 */
export function createHttpApiGenerator(
  _generatorOptions: HttpApiTypeScriptGeneratorOptions
): HttpApiTypeScriptGenerator {
  return () => {
    return of(void 0);
  };
}
