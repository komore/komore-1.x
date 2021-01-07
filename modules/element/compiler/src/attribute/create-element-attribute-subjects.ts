import type { InterfaceDeclaration, NodeFactory, PropertyAssignment, PropertyDeclaration } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { ElementAttributeDefinition } from './element-attribute-definition';

const subjectMapType = 'ElementAttributeSubjectMap';
const subjectMapName = '_k_attrs';

/**
 * Creates an element attribute subject map
 * @param factory TypeScript node factory
 * @param _x
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
  const attributeSubjects = attributeDefinitions.map(attribute => createElementAttributeSubject(factory, attribute));
  const initializer = factory.createObjectLiteralExpression(attributeSubjects, true);
  return factory.createPropertyDeclaration(undefined, modifiers, subjectMapName, undefined, type, initializer);
}

/**
 * Creates an element attribute subject
 * @param factory TypeScript node factory
 * @param attributeDefinition Element attribute definition
 * @returns Shorthand property assignment
 */
function createElementAttributeSubject(
  factory: NodeFactory,
  attributeDefinition: ElementAttributeDefinition
): PropertyAssignment {
  const { attributeName, attributeValueType, defaultValue } = attributeDefinition;
  const behaviorSubject = factory.createIdentifier('BehaviorSubject');
  const behaviorSubjectValue = factory.createTypeReferenceNode(attributeValueType.typeName);
  const newExpression = factory.createNewExpression(behaviorSubject, [behaviorSubjectValue], [defaultValue]);
  const propertyName = factory.createStringLiteral(attributeName);
  return factory.createPropertyAssignment(propertyName, newExpression);
}
