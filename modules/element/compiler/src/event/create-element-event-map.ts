import { type Identifier, type InterfaceDeclaration, type NodeFactory, SyntaxKind } from 'typescript';
import { type ElementEventDefinition } from '../definition/element-event-definition';
import { createElementEventProperty } from './create-element-event-property';

/**
 * Creates an element event map
 * ```ts
 * export interface ElementClassNameEventMap extends HTMLElementEventMap {
 *   'event-name1': CustomEvent<Type1>;
 *   'event-name2': CustomEvent<Type2>;
 *   // ...
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementClassName Element class name
 * @param elementBaseClassName Element base class name
 * @param elementEventDefinitions Element event definitions
 * @returns Element event map interface and name
 */
export function createElementEventMap(
  factory: NodeFactory,
  elementClassName: string,
  elementEventDefinitions: ReadonlyArray<ElementEventDefinition>
): [InterfaceDeclaration, Identifier] {
  const htmlElementEventMapIdentifier = factory.createIdentifier('HTMLElementEventMap');
  const htmlElementTypeExpression = factory.createExpressionWithTypeArguments(htmlElementEventMapIdentifier, undefined);
  const baseEventMapExtend = factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [htmlElementTypeExpression]);
  const interfaceName = factory.createIdentifier(`${elementClassName}EventMap`);
  const interfaceDeclaration = factory.createInterfaceDeclaration(
    undefined,
    [factory.createModifier(SyntaxKind.ExportKeyword)],
    interfaceName,
    undefined,
    [baseEventMapExtend],
    elementEventDefinitions.map(elementEventDefinition => createElementEventProperty(factory, elementEventDefinition))
  );
  return [interfaceDeclaration, interfaceName];
}
