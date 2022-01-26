import { of, type Observable } from '@komore/reactive';
import { createElementClassDeclaration } from './class/create-element-class-declaration';
import { createElementEventMapInterfaceDeclaration } from './event/create-element-event-map-interface-declaration';
import { createElementInterfaceDeclaration } from './interface/create-element-interface-declaration';
import { type ProcessedSource } from './processors/processed-source';
import { createElementCompilerContext } from './create-element-compiler-context';
import { type ElementCompilerOptions } from './element-compiler-options';
import { type ElementCompilerResult } from './element-compiler-result';

/**
 * Returns a function that compiles a processed source
 * @param compilerOptions Element compiler options
 * @returns Function that compiles a processed source
 */
export function toCompiledElement(
  compilerOptions: ElementCompilerOptions
): (processedSource: ProcessedSource) => Observable<ElementCompilerResult> {
  return ({ elementDefinition }) => {
    const context = createElementCompilerContext(compilerOptions);
    const factory = context.factory;
    const attributeMapInterfaceName = `${elementDefinition.className}AttributeMap`;
    const eventMapInterfaceName = `${elementDefinition.className}EventMap`;
    const templateElementId = undefined;
    const styleSheetsId = undefined;
    const [_elementEventMapInterfaceDeclaration, elementEventMapIdentifier] = createElementEventMapInterfaceDeclaration(
      factory,
      eventMapInterfaceName,
      elementDefinition.baseClassName,
      elementDefinition.eventDefinitions ?? []
    );
    const elementEventMap = factory.createTypeReferenceNode(elementEventMapIdentifier);
    const _elementClassDeclaration = createElementClassDeclaration(
      context.factory,
      elementDefinition,
      templateElementId,
      styleSheetsId
    );
    const _elementInterfaceDeclaration = createElementInterfaceDeclaration(factory, elementDefinition, elementEventMap);
    const result: ElementCompilerResult = {
      errors: []
    };
    return of(result);
  };
}
