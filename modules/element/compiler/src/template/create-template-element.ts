import type { Identifier, NodeFactory, VariableStatement } from 'typescript';
import { createPropertyAccess } from '../codegen/create-property-access';
import { createVariableStatement } from '../codegen/create-variable-statement';

export function createElementTemplate(factory: NodeFactory): [VariableStatement, Identifier] {
  const createElement = createPropertyAccess(factory, 'document', 'createElement');
  const templateStringLiteral = factory.createStringLiteral('template');
  const createElementCall = factory.createCallExpression(createElement, undefined, [templateStringLiteral]);
  return createVariableStatement(factory, 'templateElement', createElementCall);
}

const templateElement = document.createElement('template');
templateElement.innerHTML = 'abc';



actory.createCallExpression(
    factory.createPropertyAccessExpression(
      factory.createIdentifier("document"),
      factory.createIdentifier("createElement")
    ),
    undefined,
    [factory.createStringLiteral("template")]
  )