import { of } from '@komore/reactive';
import { createTypeScriptScriptProcessor } from './create-typescript-script-processor';
import { type TypeScriptScriptProcessorFactory } from './typescript-script-processor-factory';
import { type TypeScriptScriptProcessorFactoryOptions } from './typescript-script-processor-factory-options';

/**
 * Creates a TypeScript script processor factory
 * @param options TypeScript script processor factory options
 * @returns TypeScript script processor factory
 */
export function createTypeScriptScriptProcessorFactory(
  _options: TypeScriptScriptProcessorFactoryOptions
): TypeScriptScriptProcessorFactory {
  return {
    mediaTypeRegExp: /^application\/typescript$/,
    pathRegExp: /.+\.ts$/,
    createProcessor: options => of(createTypeScriptScriptProcessor(options))
  };
}
