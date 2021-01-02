import { of } from 'rxjs';
import type { CompilerOptions, TranspileOptions } from 'typescript';
import { ModuleResolutionKind, ScriptTarget, transpileModule } from 'typescript';
import type { ScriptProcessor } from '../script-processor';
import { createTypeScriptImportTransformer } from './create-typescript-import-transformer';
import { typeScriptPropertyTransformerFactory } from './typescript-property-transformer-factory';

export function createTypeScriptProcessor(_: unknown): ScriptProcessor {
  return content => {
    const compilerOptions: CompilerOptions = { // TODO: fetch from options/executor
      moduleResolution: ModuleResolutionKind.NodeJs,
      target: ScriptTarget.ES2019
    };
    const transpileOptions: TranspileOptions = {
      compilerOptions,
      fileName: 'hello-world-lie',
      transformers: {
        before: [
          createTypeScriptImportTransformer,
          typeScriptPropertyTransformerFactory
        ]
      }
    };

    const transpileOutput = transpileModule(content, transpileOptions);

    console.log('weee', transpileOutput);

    return of(undefined);
  };
}
