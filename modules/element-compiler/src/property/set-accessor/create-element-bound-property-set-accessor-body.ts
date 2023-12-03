import { createPropertyAccess } from '@komore/typescript/compiler';
import {
  SyntaxKind,
  type Block,
  type Identifier,
  type NodeFactory,
  type Statement,
  type StringLiteral
} from 'typescript';
import { type ElementPropertyAttributeBoundDefinition } from '../../definition/element-property-attribute-bound-definition';
import { type ElementCompilerContext } from '../../element-compiler-context';

/**
 * Creates an element property set accessor body for a property that is bound to an attribute
 *
 * For a mandatory property:
 * ```ts
 * {
 *   this.setAttribute('attribute-name', value);
 * }
 * ```
 * For an optional property:
 * ```ts
 * {
 *   if (value !== undefined) {
 *     this.setAttribute('attribute-name', value);
 *   } else {
 *     this.removeAttribute('attribute-name');
 *   }
 * }
 * ```
 * @param context Element compiler context
 * @param propertyDefinition Element property definition
 * @param value Value identifier
 */
export function createElementBoundPropertySetAccessorBody(
  context: ElementCompilerContext,
  propertyDefinition: ElementPropertyAttributeBoundDefinition,
  value: Identifier
): Block {
  const factory = context.factory;
  const { boundAttributeName, isOptional } = propertyDefinition;
  const attributeName = factory.createStringLiteral(boundAttributeName);
  const statement = isOptional
    ? createSetOrRemoveAttributeCallsIfElseStatement(factory, attributeName, value)
    : createSetAttributeCallStatement(factory, attributeName, value);
  return factory.createBlock([statement], true);
}

/**
 * Creates an if/else block that sets or removes an attribute
 * @param factory TypeScript node factory
 * @param attributeName Attribute name literal
 * @param value Value identifier
 * @returns If statement
 */
function createSetOrRemoveAttributeCallsIfElseStatement(
  factory: NodeFactory,
  attributeName: StringLiteral,
  value: Identifier
): Statement {
  const notEqual = factory.createToken(SyntaxKind.ExclamationEqualsEqualsToken);
  const undefinedIdentifier = factory.createIdentifier('undefined');
  const valueNotUndefined = factory.createBinaryExpression(value, notEqual, undefinedIdentifier);
  const setAttributeCallStatement = createSetAttributeCallStatement(factory, attributeName, value);
  const removeAttributeCallStatement = createRemoveAttributeCallStatement(factory, attributeName);
  const ifBlock = factory.createBlock([setAttributeCallStatement], true);
  const elseBlock = factory.createBlock([removeAttributeCallStatement], true);
  return factory.createIfStatement(valueNotUndefined, ifBlock, elseBlock);
}

/**
 * Creates a setAttribute call statement
 * @param factory TypeScript node factory
 * @param attributeName Attribute name
 * @param value Value
 * @returns setAttribute call statement
 */
function createSetAttributeCallStatement(
  factory: NodeFactory,
  attributeName: StringLiteral,
  value: Identifier
): Statement {
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
