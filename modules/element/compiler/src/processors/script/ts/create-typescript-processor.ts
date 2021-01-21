import { of } from 'rxjs';
import type { CompilerOptions, TranspileOptions } from 'typescript';
import { ModuleResolutionKind, ScriptTarget, transpileModule } from 'typescript';
import type { ScriptProcessor } from '../script-processor';
import { createTypeScriptImportTransformerFactory } from './create-typescript-import-transformer-factory';
import { createTypeScriptPropertyTransformerFactory } from './create-typescript-property-transformer-factory';

/**
 * Creates a TypeScript processor
 * @param _
 */
export function createTypeScriptProcessor(_: unknown): ScriptProcessor {
  return content => {
    const compilerOptions: CompilerOptions = {
      // TODO: fetch from options/executor
      moduleResolution: ModuleResolutionKind.NodeJs,
      target: ScriptTarget.ES2019
    };

    const transpileOptions: TranspileOptions = {
      compilerOptions,
      fileName: 'hello-world-lie',
      transformers: {
        before: [createTypeScriptImportTransformerFactory(), createTypeScriptPropertyTransformerFactory()]
      }
    };

    const transpileOutput = transpileModule(content, transpileOptions);

    console.log('weee', transpileOutput);

    return of(undefined);
  };
}
