import type { InterfaceDeclaration, NodeFactory, TypeNode } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createExtendsType } from '../codegen/create-extends-type';
import { createElementEventListenerMethods } from '../event/create-element-event-listener-methods';
import { createElementProperties } from '../property/create-element-properties';
import type { ElementPropertyDefinition } from '../property/element-property-definition';

/**
 * Creates an element interface declaration
 *
 * An element interface declaration includes:
 * - an interface that extends the correct base element class
 * - element properties, made readonly when necessary
 * - typed and default overloads for addEventListener and removeEventListener
 *
 * ```ts
 * export interface ClassName extends BaseClassName {
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @param propertyDefinitions Property definitions
 * @param eventMapType Event map type
 * @returns Class declaration node
 */
export function createElementInterfaceDeclaration(
  factory: NodeFactory,
  elementDefinition: ElementDefinition,
  propertyDefinitions: ReadonlyArray<ElementPropertyDefinition>,
  eventMapType: TypeNode
): InterfaceDeclaration {
  const { baseClassName, className } = elementDefinition;
  const interfaceName = factory.createIdentifier(className);
  const elementType = factory.createTypeReferenceNode(className);
  const propertySignatures = createElementProperties(factory);
  const eventListenerMethodSignatures = createElementEventListenerMethods(factory, elementType, eventMapType);

  return factory.createInterfaceDeclaration(
    undefined,
    [factory.createModifier(SyntaxKind.ExportKeyword)],
    interfaceName,
    undefined,
    [createExtendsType(factory, baseClassName)],
    [
      ...propertySignatures,
      ...eventListenerMethodSignatures
    ]
  );
}
