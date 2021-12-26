import { type Identifier, type NodeFactory, type PropertySignature, SyntaxKind } from 'typescript';
import { type ElementPropertyDefinition } from '../definition/element-property-definition';

/**
 * Creates an element interface property signature
 * ```ts
 * interface _ {
 *   propertyName: propertyType;
 *   propertyName?: propertyType;
 *   readonly propertyName: propertyType;
 *   readonly propertyName?: propertyType;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param propertyDefinition Property definition
 * @returns Property signature and identifier
 */
export function createElementInterfaceProperty(
  factory: NodeFactory,
  propertyDefinition: ElementPropertyDefinition
): [PropertySignature, Identifier] {
  const { propertyName, propertyType, isOptional, isReadOnly } = propertyDefinition;
  const identifier = factory.createIdentifier(propertyName);
  const modifiers = isReadOnly ? [factory.createModifier(SyntaxKind.ReadonlyKeyword)] : [];
  const questionToken = isOptional ? factory.createToken(SyntaxKind.QuestionToken) : undefined;
  const signature = factory.createPropertySignature(modifiers, identifier, questionToken, propertyType);
  return [signature, identifier];
}
