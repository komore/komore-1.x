import { createExtendsType } from '@komore/typescript/compiler';
import { type ClassDeclaration, type Identifier, type NodeFactory } from 'typescript';
import { createElementObservedAttributesGetAccessor } from '../attribute/create-element-observed-attributes-get-accessor';
import { createElementClassConstructor } from '../constructor/create-element-class-constructor';
import { type ElementDefinition } from '../definition/element-definition';

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
 * @returns Class declaration and name identifier
 */
export function createElementClassDeclaration(
  factory: NodeFactory,
  elementDefinition: ElementDefinition,
  templateElement: Identifier | undefined,
  styleSheets: Identifier | undefined
): readonly [classDeclaration: ClassDeclaration, identifier: Identifier] {
  const { baseClassName, className, attributeDefinitions } = elementDefinition;
  const [getAccessor] = createElementObservedAttributesGetAccessor(factory, attributeDefinitions ?? []);
  const classConstructor = createElementClassConstructor(factory, templateElement, styleSheets);
  const nameId = factory.createIdentifier(className);
  const heritageClauses = [createExtendsType(factory, baseClassName)];
  const members = [getAccessor, classConstructor];
  const declaration = factory.createClassDeclaration(undefined, undefined, nameId, undefined, heritageClauses, members);
  return [declaration, nameId];
}
