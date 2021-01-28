import type { Identifier, NodeFactory, PropertySignature } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';

/**
 * Creates an element property declaration
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
export function createElementPropertyDeclaration(
  factory: NodeFactory,
  propertyDefinition: ElementPropertyDefinition
): [PropertySignature, Identifier] {
  const { propertyName, propertyType, isOptional, isReadOnly } = propertyDefinition;
  const propertyIdentifier = factory.createIdentifier(propertyName);
  const modifiers = isReadOnly ? [factory.createModifier(SyntaxKind.ReadonlyKeyword)] : [];
  const questionToken = isOptional ? factory.createToken(SyntaxKind.QuestionToken) : undefined;
  const propertySignature = factory.createPropertySignature(modifiers, propertyIdentifier, questionToken, propertyType);
  return [propertySignature, propertyIdentifier];
}
