import type { Identifier, InterfaceDeclaration, NodeFactory } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementEventProperty } from './create-element-event-property';
import type { ElementEventDefinition } from './element-event-definition';

/**
 * Creates an element event map
 * ```ts
 * export interface ElementClassNameEventMap {
 *   'event-name1': CustomEvent<Type1>;
 *   'event-name2': CustomEvent<Type2>;
 *   // ...
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @param elementEventDefinitions Element event definitions
 * @returns Element event map interface and name
 */
export function createElementEventMap(
  factory: NodeFactory,
  elementDefinition: ElementDefinition,
  elementEventDefinitions: ReadonlyArray<ElementEventDefinition>
): [InterfaceDeclaration, Identifier] {
  const { className } = elementDefinition;
  const htmlElementEventMapIdentifier = factory.createIdentifier('HTMLElementEventMap');
  const htmlElementTypeExpression = factory.createExpressionWithTypeArguments(htmlElementEventMapIdentifier, undefined);
  const baseEventMapExtend = factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [htmlElementTypeExpression]);
  const interfaceName = factory.createIdentifier(`${className}EventMap`);
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
