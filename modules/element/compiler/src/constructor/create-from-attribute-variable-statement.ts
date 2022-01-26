import { createVariableStatement } from '@komore/typescript/compiler';
import { type Identifier, type VariableStatement } from 'typescript';
import { type ElementCompilerContext } from '../element-compiler-context';

/**
 * Creates a fromAttribute variable statement
 * ```ts
 * const name = toAttributeFrom<keyof AttributeMap>(this, attributeChanged);
 * ```
 * @param context Context
 * @param name Variable name
 * @param attributeChanged Attribute changed identifier
 * @returns Variable statement and identifier
 */
export function createFromAttributeVariableStatement(
  context: ElementCompilerContext,
  name: string,
  attributeChanged: Identifier
): readonly [variableStatement: VariableStatement, identifier: Identifier] {
  const { factory, resolveImport } = context;
  const toAttributeFrom = resolveImport({
    name: 'toAttributeFrom',
    path: '@komore/element'
  });
  const callArguments = [factory.createThis(), attributeChanged];
  const initializer = factory.createCallExpression(toAttributeFrom, undefined, callArguments);
  return createVariableStatement(factory, name, initializer);
}
