import { createExtendsType } from '@komore/typescript/compiler';
import type { InterfaceDeclaration, NodeFactory, TypeNode } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementEventListenerMethods } from '../event/create-element-event-listener-methods';
import { createElementInterfaceMethods } from '../method/create-element-interface-methods';
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
  const { baseClassName, className, methodDefinitions, propertyDefinitions } = elementDefinition;
  const interfaceName = factory.createIdentifier(className);
  const elementType = factory.createTypeReferenceNode(className);
  const propertySignatures = createElementInterfaceProperties(factory, propertyDefinitions ?? []);
  const methodSignatures = createElementInterfaceMethods(factory, methodDefinitions ?? []);
  const eventListenerMethodSignatures = createElementEventListenerMethods(factory, elementType, eventMapType);

  return factory.createInterfaceDeclaration(
    undefined,
    [factory.createModifier(SyntaxKind.ExportKeyword)],
    interfaceName,
    undefined,
    [createExtendsType(factory, baseClassName)],
    [...propertySignatures, ...eventListenerMethodSignatures, ...methodSignatures]
  );
}
