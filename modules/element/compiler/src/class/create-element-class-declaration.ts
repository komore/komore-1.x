import type { ClassDeclaration, Identifier, NodeFactory } from 'typescript';
import { createElementObservedAttributesGetAccessor } from '../attribute/create-element-observed-attributes-get-accessor';
import { createExtendsType } from '../codegen/create-extends-type';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementClassConstructor } from './create-element-class-constructor';

/**
 * Creates an element class declaration
 * ```ts
 * class ClassName extends BaseClassName {
 *   static get observedAttributes() {
 *     return ['a', 'b'] as const;
 *   }
 *   constructor() {
 *     super();
 *   }
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @param templateElement Template element variable identifier
 * @param styleSheets Style sheets variable identifier
 * @returns Class declaration node
 */
export function createElementClassDeclaration(
  factory: NodeFactory,
  elementDefinition: ElementDefinition,
  templateElement: Identifier | undefined,
  styleSheets: Identifier | undefined
): ClassDeclaration {
  const { baseClassName, className, attributeDefinitions } = elementDefinition;
  return factory.createClassDeclaration(
    undefined,
    undefined,
    factory.createIdentifier(className),
    undefined,
    [createExtendsType(factory, baseClassName)],
    [
      createElementObservedAttributesGetAccessor(factory, attributeDefinitions ?? []),
      createElementClassConstructor(factory, templateElement, styleSheets)
    ]
  );
}
