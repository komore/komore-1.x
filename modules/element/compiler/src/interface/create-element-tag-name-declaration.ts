import { type InterfaceDeclaration, type ModuleDeclaration, type NodeFactory, NodeFlags, SyntaxKind } from 'typescript';
import { type ElementDefinition } from '../definition/element-definition';

/**
 * Creates an element tag name declaration
 * ```ts
 * declare global {
 *   interface HTMLElementTagNameMap {
 *     'tag-name': ClassName;
 *   }
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @returns Module declaration
 */
export function createElementTagNameDeclaration(
  factory: NodeFactory,
  elementDefinition: ElementDefinition
): ModuleDeclaration {
  const moduleName = factory.createIdentifier('global');
  const modifiers = [factory.createModifier(SyntaxKind.DeclareKeyword)];
  const flags = NodeFlags.GlobalAugmentation | NodeFlags.ContextFlags;
  const interfaceDeclaration = createHTMLElementTagNameMapInterfaceDeclaration(factory, elementDefinition);
  const block = factory.createModuleBlock([interfaceDeclaration]);
  return factory.createModuleDeclaration(undefined, modifiers, moduleName, block, flags);
}

/**
 * Creates an HTML element tag name map interface declaration
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @returns Interface declaration
 */
function createHTMLElementTagNameMapInterfaceDeclaration(
  factory: NodeFactory,
  elementDefinition: ElementDefinition
): InterfaceDeclaration {
  const name = factory.createIdentifier('HTMLElementTagNameMap');
  const tagName = factory.createStringLiteral(elementDefinition.tagName);
  const className = factory.createTypeReferenceNode(elementDefinition.className);
  const property = factory.createPropertySignature(undefined, tagName, undefined, className);
  return factory.createInterfaceDeclaration(undefined, undefined, name, undefined, undefined, [property]);
}
