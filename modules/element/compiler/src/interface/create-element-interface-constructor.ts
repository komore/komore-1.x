import { type NodeFactory, type VariableDeclaration } from 'typescript';
import { type ElementDefinition } from '../definition/element-definition';

/**
 * Creates an element interface constructor
 * ```ts
 * elementClassName: {
 *   new(): elementClassName;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @returns Variable declaration
 */
export function createElementInterfaceConstructor(
  factory: NodeFactory,
  elementDefinition: ElementDefinition
): VariableDeclaration {
  const className = factory.createIdentifier(elementDefinition.className);
  const classType = factory.createTypeReferenceNode(className);
  const constructorSignature = factory.createConstructSignature(undefined, [], classType);
  const type = factory.createTypeLiteralNode([constructorSignature]);
  return factory.createVariableDeclaration(className, undefined, type, undefined);
}
