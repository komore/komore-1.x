import type { ExpressionStatement, Identifier, NodeFactory } from 'typescript';
import { createPropertyAccess } from '../codegen/create-property-access';

/**
 * Creates an adoptedStyleSheets assignment expression
 * ```ts
 * object.adoptedStyleSheets = styleSheets;
 * ```
 * @param factory TypeScript node factory
 * @param objectIdentifier Object identifier
 * @param styleSheetsIdentifier Style sheets identifier
 * @returns Exprssion statement
 */
export function createAdoptedStyleSheetsExpression(
  factory: NodeFactory,
  objectIdentifier: Identifier,
  styleSheetsIdentifier: Identifier
): ExpressionStatement {
  const adoptedStyleSheets = createPropertyAccess(factory, objectIdentifier, 'adoptedStyleSheets');
  const adoptedStyleSheetsAssignment = factory.createAssignment(adoptedStyleSheets, styleSheetsIdentifier);
  return factory.createExpressionStatement(adoptedStyleSheetsAssignment);
}
