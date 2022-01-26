import { factory, type Identifier, type NodeFactory } from 'typescript';
import { type ElementCompilerContext } from './element-compiler-context';
import { ElementCompilerContextImportOptions } from './element-compiler-context-import-options';
import { type ElementCompilerOptimizationOptions } from './element-compiler-optimization-options';

const defaultOptimizations: ElementCompilerOptimizationOptions = {
  avoidImports: false
};

// TODO: import { type DeepPartial } from '@komore/typescript';
export function createMockElementCompilerContext(
  elementCompilerContext?: Partial<ElementCompilerContext>
): ElementCompilerContext {
  const f = elementCompilerContext?.factory ?? factory;
  const optimizations = {
    ...defaultOptimizations,
    ...elementCompilerContext?.optimizations
  };
  const resolveImport = elementCompilerContext?.resolveImport ?? jest.fn(mockResolveImportToIdentifier(f));
  return {
    factory: f,
    resolveImport,
    optimizations
  };
}

function mockResolveImportToIdentifier(
  factory: NodeFactory
): (importOptions: ElementCompilerContextImportOptions) => Identifier {
  return ({ name }) => factory.createIdentifier(name);
}
