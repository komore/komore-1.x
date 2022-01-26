import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { type NodeFactory, SyntaxKind, type TypeNode } from 'typescript';

/**
 * Creates an element property type
 * @param factory TypeScript node factory
 * @param propertyDefinition Element property definition
 * @returns Element property type
 */
export function createElementPropertyType(
  factory: NodeFactory,
  propertyDefinition: ElementPropertyDefinition
): TypeNode {
  const { isOptional, propertyType } = propertyDefinition;
  return isOptional
    ? factory.createUnionTypeNode([propertyType, factory.createKeywordTypeNode(SyntaxKind.UndefinedKeyword)])
    : propertyType;
}
