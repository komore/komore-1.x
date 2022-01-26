import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { createPropertyAccess } from '@komore/typescript/compiler';
import { type Block, type Identifier } from 'typescript';
import { type ElementCompilerContext } from '../../element-compiler-context';

/**
 * Creates an element property set accessor body for a property that is not bound to an attribute
 * ```ts
 * this.containerName.propertyName.next(value);
 * ```
 * @param context Element compiler context
 * @param containerName Container name
 * @param propertyDefinition Element property definition
 * @param value Value identifier
 */
export function createElementUnboundPropertySetAccessorBody(
  context: ElementCompilerContext,
  containerName: string,
  propertyDefinition: ElementPropertyDefinition,
  value: Identifier
): Block {
  const factory = context.factory;
  const { propertyName } = propertyDefinition;
  const subjectNext = createPropertyAccess(factory, factory.createThis(), containerName, propertyName, 'next');
  const callSubjectNext = factory.createCallExpression(subjectNext, undefined, [value]);
  const callSubjectNextStatement = factory.createExpressionStatement(callSubjectNext);
  const statements = [callSubjectNextStatement];
  return factory.createBlock(statements, true);
}
