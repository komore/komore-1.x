import { compileElementSource } from './compile-element-source';
import { type ElementCompiler } from './element-compiler';
import { type ElementCompilerOptions } from './element-compiler-options';

export function createElementCompiler(options: ElementCompilerOptions): ElementCompiler {
  return source => source.pipe(

  );
}
