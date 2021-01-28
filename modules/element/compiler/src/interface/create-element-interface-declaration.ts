import type { InterfaceDeclaration, NodeFactory, TypeNode } from 'typescript';
import { SyntaxKind } from 'typescript';
import { createExtendsType } from '../codegen/create-extends-type';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementEventListenerMethods } from '../event/create-element-event-listener-methods';
import { createElementInterfaceProperties } from '../property/create-element-interface-properties';

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
 * @param eventMapType Event map type
 * @returns Class declaration node
 */
export function createElementInterfaceDeclaration(
  factory: NodeFactory,
  elementDefinition: ElementDefinition,
  eventMapType: TypeNode
): InterfaceDeclaration {
  const { baseClassName, className, propertyDefinitions } = elementDefinition;
  const interfaceName = factory.createIdentifier(className);
  const elementType = factory.createTypeReferenceNode(className);
  const propertySignatures = createElementInterfaceProperties(factory, propertyDefinitions ?? []);
  const eventListenerMethodSignatures = createElementEventListenerMethods(factory, elementType, eventMapType);

  return factory.createInterfaceDeclaration(
    undefined,
    [factory.createModifier(SyntaxKind.ExportKeyword)],
    interfaceName,
    undefined,
    [createExtendsType(factory, baseClassName)],
    [...propertySignatures, ...eventListenerMethodSignatures]
  );
}
