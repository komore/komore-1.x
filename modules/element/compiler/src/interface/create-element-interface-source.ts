import { type NodeFactory, NodeFlags, type SourceFile, type Statement, SyntaxKind } from 'typescript';
import { type ElementDefinition } from '../definition/element-definition';
import { createElementEventMap } from '../event/create-element-event-map';
import { createElementInterfaceConstructor } from './create-element-interface-constructor';
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
  const { className, eventDefinitions } = elementDefinition;
  const eofToken = factory.createToken(SyntaxKind.EndOfFileToken);
  const [eventMapInterface, eventMapName] = createElementEventMap(factory, className, eventDefinitions ?? []);
  const eventMapType = factory.createTypeReferenceNode(eventMapName);
  const elementInterface = createElementInterfaceDeclaration(factory, elementDefinition, eventMapType);
  const elementConstructor = createElementInterfaceConstructorDeclareStatement(factory, elementDefinition);
  const elementTagName = createElementTagNameDeclaration(factory, elementDefinition);
  const statements = [eventMapInterface, elementInterface, elementConstructor, elementTagName];
  return factory.createSourceFile(statements, eofToken, NodeFlags.None);
}

/**
 * Creates an element interface constructor declare statement
 * ```ts
 * declare var ElementClass {
 *   new (): ElementClass;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @returns
 */
function createElementInterfaceConstructorDeclareStatement(
  factory: NodeFactory,
  elementDefinition: ElementDefinition
): Statement {
  const interfaceVariableDeclaration = createElementInterfaceConstructor(factory, elementDefinition);
  const flags = NodeFlags.Const | NodeFlags.ContextFlags;
  const declarationList = factory.createVariableDeclarationList([interfaceVariableDeclaration], flags);
  const modifiers = [factory.createModifier(SyntaxKind.DeclareKeyword)];
  return factory.createVariableStatement(modifiers, declarationList);
}
