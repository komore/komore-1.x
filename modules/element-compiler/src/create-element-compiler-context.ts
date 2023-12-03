import { factory } from 'typescript';
import { type ElementCompilerContext } from './element-compiler-context';
import { type ElementCompilerOptions } from './element-compiler-options';

export function createElementCompilerContext(compilerOptions: ElementCompilerOptions): ElementCompilerContext {
  return {
    factory,
    optimizations: compilerOptions.optimizations,
    resolveImport: options => {
      console.log('resolve import', options);
      return factory.createIdentifier(options.alias ?? options.name);
    }
  };
}
