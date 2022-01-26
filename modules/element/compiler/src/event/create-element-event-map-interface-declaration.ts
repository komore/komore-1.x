import { type ElementEventDefinition } from '@komore/element/compiler/processor';
import {
  SyntaxKind,
  type Identifier,
  type InterfaceDeclaration,
  type NodeFactory,
  type PropertySignature
} from 'typescript';
import { createElementEventProperty } from './create-element-event-property';

/**
 * Creates an element event map interface declaration
 * ```ts
 * interface interfaceName extends HTMLElementEventMap {
 *   'event-name1': CustomEvent<Type1>;
 *   'event-name2': CustomEvent<Type2>;
 *   // ...
 * }
 * ```
 * @param factory TypeScript node factory
 * @param interfaceName Interface name
 * @param baseElementClassName Base element class name
 * @param elementEventDefinitions Element event definitions
 * @returns Interface declaration and identifier
 */
export function createElementEventMapInterfaceDeclaration(
  factory: NodeFactory,
  interfaceName: string,
  _baseElementClassName: string,
  elementEventDefinitions: ReadonlyArray<ElementEventDefinition>
): readonly [interfaceDeclaration: InterfaceDeclaration, identifier: Identifier] {
  // TODO: pick a better base class when possible, based on baseElementClassName
  const htmlElementEventMapIdentifier = factory.createIdentifier('HTMLElementEventMap');
  const htmlElementTypeExpression = factory.createExpressionWithTypeArguments(htmlElementEventMapIdentifier, undefined);
  const baseEventMapExtend = factory.createHeritageClause(SyntaxKind.ExtendsKeyword, [htmlElementTypeExpression]);
  const identifier = factory.createIdentifier(interfaceName);
  const propertySignatures = elementEventDefinitions.map(toElementEventProperty(factory));
  const interfaceDeclaration = factory.createInterfaceDeclaration(
    undefined,
    undefined,
    identifier,
    undefined,
    [baseEventMapExtend],
    propertySignatures
  );
  return [interfaceDeclaration, identifier];
}

/**
 * Returns a function that returns a property signature, given an element event definition
 * @param factory TypeScript node factory
 * @returns Function that returns a property signature, given an element event definition
 */
function toElementEventProperty(factory: NodeFactory): (eventDefinition: ElementEventDefinition) => PropertySignature {
  return elementEventDefinition => createElementEventProperty(factory, elementEventDefinition);
}
