import type { InterfaceDeclaration, NodeFactory, PropertyDeclaration } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { ElementAttributeDefinition } from '../definition/element-attribute-definition';
import { createElementAttributeSubjectProperty } from './create-element-attribute-subject-property';

const subjectMapType = 'ElementAttributeSubjectMap';
const subjectMapName = '_ka';

/**
 * Creates an element attribute subject map
 * ```ts
 * private readonly _k_attrs: ElmentAttributeSubjectMap<AttributeMap> = {
 *   'attr-1': _cEAS<AttributeType>(...params),
 *   // ...
 * }
 * ```
 * @param factory TypeScript node factory
 * @param attributeMap Attribute map interface declaration
 * @param attributeDefinitions Element attribute definitions
 * @returns Property declaration
 */
export function createElementAttributeSubjects(
  factory: NodeFactory,
  attributeMap: InterfaceDeclaration,
  attributeDefinitions: ReadonlyArray<ElementAttributeDefinition>
): PropertyDeclaration {
  const privateModifier = factory.createModifier(SyntaxKind.PrivateKeyword);
  const readonlyModifier = factory.createModifier(SyntaxKind.ReadonlyKeyword);
  const modifiers = [privateModifier, readonlyModifier];
  const type = factory.createTypeReferenceNode(subjectMapType, [factory.createTypeReferenceNode(attributeMap.name)]);
  const subjects = attributeDefinitions.map(attribute => createElementAttributeSubjectProperty(factory, attribute));
  const initializer = factory.createObjectLiteralExpression(subjects, true);
  return factory.createPropertyDeclaration(undefined, modifiers, subjectMapName, undefined, type, initializer);
}
