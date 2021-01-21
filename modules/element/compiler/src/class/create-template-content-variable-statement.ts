import { Identifier, NodeFactory, VariableStatement } from 'typescript';
import { createPropertyAccess } from '../codegen/create-property-access';
import { createVariableStatement } from '../codegen/create-variable-statement';

/**
 * Creates a template content variable statement
 * ```ts
 * const variableName = templateElement.content.cloneNode(true);
 * ```
 * @param factory TypeScript node factory
 * @param variableName Variable name
 * @param templateElement Template element identifier
 * @returns Variable statement and identifier
 */
export function createTemplateContentVariableStatement(
  factory: NodeFactory,
  variableName: string,
  templateElement: Identifier
): [VariableStatement, Identifier] {
  const cloneNode = createPropertyAccess(factory, templateElement, 'content', 'cloneNode');
  const cloneNodeCall = factory.createCallExpression(cloneNode, undefined, [factory.createTrue()]);
  return createVariableStatement(factory, variableName, cloneNodeCall);
}
