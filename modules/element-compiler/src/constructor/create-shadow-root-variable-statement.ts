import { type Identifier, type NodeFactory, type VariableStatement } from 'typescript';

import { createTypeScriptPropertyAccess, createTypeScriptVariableStatement } from '@komore/tsc';

/**
 * Creates a shadow root variable statement
 *
 * ```ts
 * const variableName = this.attachShadow({ mode: 'mode' });
 * ```
 *
 * @param factory TypeScript node factory
 * @param variableName Variable name
 * @param mode Mode
 * @returns Shadow root variable statement and identifier
 */
export function createShadowRootVariableStatement(
  factory: NodeFactory,
  variableName: string,
  mode: ShadowRootMode
): readonly [variableStatement: VariableStatement, identifier: Identifier] {
  const thisExpression = factory.createThis();
  const attachShadowOptionsMode = factory.createPropertyAssignment('mode', factory.createStringLiteral(mode));
  const attachShadowOptions = factory.createObjectLiteralExpression([attachShadowOptionsMode]);
  const attachShadow = createPropertyAccess(factory, thisExpression, 'attachShadow');
  const attachShadowCall = factory.createCallExpression(attachShadow, undefined, [attachShadowOptions]);
  return createVariableStatement(factory, variableName, attachShadowCall);
}
