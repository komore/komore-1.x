import { createParameter, createPropertyAccess } from '@komore/typescript/compiler';
import type { AccessorDeclaration, Identifier, NodeFactory, Statement, StringLiteral } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { ElementPropertyAttributeBoundDefinition } from '../definition/element-property-attribute-bound-definition';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { isElementPropertyAttributeBound } from '../definition/is-element-property-attribute-bound';
import { createElementPropertyType } from './create-element-property-type';

/**
 * Creates an element property set accessor
 *
 * When a property is not bound to an attribute, it directly emits the new value
 * ```ts
 * set propertyName(value: PropertyType) {
 *   this._kp.propertyName.s.next(value);
 * }
 * ```
 * When a property is bound to an attribute, the set accessor sets the attribute so that the attribute change callback
 * ends up triggering the value being emitted from `attributeChangedCallback`:
 * ```ts
 * set propertyName(value: PropertyType) {
 *   this.setAttribute('attribute-name', value);
 * }
 * set propertyName(value: PropertyType | undefined) {
 *   if (value !== undefined) {
 *     this.setAttribute('attribute-name', value);
 *   } else {
 *     this.removeAttribute('attribute-name');
 *   }
 * }
 * ```
 * @param factory TypeScript node factory
 * @param propertyDefinition Element property definition
 * @returns Accessor declaration
 */
export function createElementPropertySetAccessor(
  factory: NodeFactory,
  propertyDefinition: ElementPropertyDefinition
): [AccessorDeclaration, Identifier] {
  const { propertyName } = propertyDefinition;
  const nameId = factory.createIdentifier(propertyName);
  const propertyType = createElementPropertyType(factory, propertyDefinition);
  const [valueDeclaration, value] = createParameter(factory, 'value', propertyType);
  const body = factory.createBlock(
    isElementPropertyAttributeBound(propertyDefinition)
      ? createBoundAttributeStatements(factory, propertyDefinition, value)
      : createStatements(factory, propertyDefinition, value),
    true
  );
  const declaration = factory.createSetAccessorDeclaration(undefined, undefined, nameId, [valueDeclaration], body);
  return [declaration, nameId];
}

/**
 * Creates statements for a property that is not bound to an attribute
 * @param factory TypeScript node factory
 * @param propertyDefinition Element property definition
 * @param value Value identifier
 */
function createStatements(
  factory: NodeFactory,
  propertyDefinition: ElementPropertyDefinition,
  value: Identifier
): ReadonlyArray<Statement> {
  const { propertyName } = propertyDefinition;
  const subjectNext = createPropertyAccess(factory, factory.createThis(), '_kp', propertyName, 's', 'next');
  const callSubjectNext = factory.createCallExpression(subjectNext, undefined, [value]);
  const callSubjectNextStatement = factory.createExpressionStatement(callSubjectNext);
  return [callSubjectNextStatement];
}

/**
 * Creates statements for a property that is bound to an attribute
 * @param factory TypeScript node factory
 * @param propertyDefinition Element property definition
 * @param value Value identifier
 */
function createBoundAttributeStatements(
  factory: NodeFactory,
  propertyDefinition: ElementPropertyAttributeBoundDefinition,
  value: Identifier
): ReadonlyArray<Statement> {
  const { boundAttributeName, isOptional } = propertyDefinition;
  const attributeName = factory.createStringLiteral(boundAttributeName);
  const setAttributeCallStatement = createSetAttributeCallStatement(factory, attributeName, value);

  if (!isOptional) {
    return [setAttributeCallStatement];
  }

  const notEqual = factory.createToken(SyntaxKind.ExclamationEqualsEqualsToken);
  const undefinedIdentifier = factory.createIdentifier('undefined');
  const valueNotUndefined = factory.createBinaryExpression(value, notEqual, undefinedIdentifier);
  const removeAttributeCallStatement = createRemoveAttributeCallStatement(factory, attributeName);
  const ifBlock = factory.createBlock([setAttributeCallStatement], true);
  const elseBlock = factory.createBlock([removeAttributeCallStatement], true);
  const ifStatement = factory.createIfStatement(valueNotUndefined, ifBlock, elseBlock);
  return [ifStatement];
}

/**
 * Creates a setAttribute call statement
 * @param factory TypeScript node factory
 * @param attributeName Attribute name
 * @param value Value
 * @returns setAttribute call statement
 */
function createSetAttributeCallStatement(factory: NodeFactory, attributeName: StringLiteral, value: Identifier): Statement {
  const thisExpression = factory.createThis();
  const setAttribute = createPropertyAccess(factory, thisExpression, 'setAttribute');
  const setAttributeCall = factory.createCallExpression(setAttribute, undefined, [attributeName, value]);
  return factory.createExpressionStatement(setAttributeCall);
}

/**
 * Creates a removeAttribute call statement
 * @param factory TypeScript node factory
 * @param attributeName Attribute name
 * @returns removeAttribute call statement
 */
function createRemoveAttributeCallStatement(factory: NodeFactory, attributeName: StringLiteral): Statement {
  const thisExpression = factory.createThis();
  const removeAttribute = createPropertyAccess(factory, thisExpression, 'removeAttribute');
  const removeAttributeCall = factory.createCallExpression(removeAttribute, undefined, [attributeName]);
  return factory.createExpressionStatement(removeAttributeCall);
}
