import type { NodeFactory, SourceFile } from 'typescript';
import { NodeFlags, SyntaxKind } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementEventMap } from '../event/create-element-event-map';
import { createElementInterfaceDeclaration } from './create-element-interface-declaration';
import { createElementTagNameDeclaration } from './create-element-tag-name-declaration';

/**
 * Creates an element interface source
 * ```ts
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @returns Source file
 */
export function createElementInterfaceSource(factory: NodeFactory, elementDefinition: ElementDefinition): SourceFile {
  const { eventDefinitions } = elementDefinition;
  const eofToken = factory.createToken(SyntaxKind.EndOfFileToken);
  const [eventMapInterface, eventMapName] = createElementEventMap(factory, elementDefinition, eventDefinitions ?? []);
  const eventMapType = factory.createTypeReferenceNode(eventMapName);
  const elementTagName = createElementTagNameDeclaration(factory, elementDefinition);
  const elementInterface = createElementInterfaceDeclaration(factory, elementDefinition, eventMapType);
  return factory.createSourceFile([
    eventMapInterface,
    elementInterface,
    elementTagName
  ], eofToken, NodeFlags.None);
}
