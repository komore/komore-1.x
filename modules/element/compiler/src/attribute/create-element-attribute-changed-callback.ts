import { Block, Identifier, MethodDeclaration, NodeFactory, NodeFlags } from 'typescript';
import { SyntaxKind } from 'typescript';
import { createParameter } from '../codegen/create-parameter';

const nameParameterName = 'name';
const oldValueParameterName = '_oldValue';
const newValueParameterName = 'newValue';

/**
 * Creates an attributeChangedCallback method declaration
 * ```ts
 * attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null): void {
 *   const attr$ = this._k_attrs[name];
 *   attr$.next(newValue ?? undefined);
 * }
 * ```
 * @param factory TypeScript node factory
 * @returns Method declaration
 */
export function createElementAttributeChangedCallback(factory: NodeFactory): MethodDeclaration {
  const string = factory.createKeywordTypeNode(SyntaxKind.StringKeyword);
  const stringOrNull = [string, factory.createLiteralTypeNode(factory.createNull())];
  const name = createParameter(factory, nameParameterName, string);
  const oldValue = createParameter(factory, oldValueParameterName, stringOrNull);
  const newValue = createParameter(factory, newValueParameterName, stringOrNull);
  const parameters = [name, oldValue, newValue];
  const block = createAttributeChangedCallbackBlock(factory, name.name as Identifier, newValue.name as Identifier);
  const type = factory.createKeywordTypeNode(SyntaxKind.VoidKeyword);
  return factory.createMethodDeclaration(
    undefined,
    undefined,
    undefined,
    'attributeChangedCallback',
    undefined,
    undefined,
    parameters,
    type,
    block
  );
}

/**
 * Creates the attributeChangedCallback method body
 * @param factory TypeScript node factory
 * @param name Name parameter identifier
 * @param newValue New value parameter identifier
 */
function createAttributeChangedCallbackBlock(factory: NodeFactory, name: Identifier, newValue: Identifier): Block {
  const attr = factory.createIdentifier('attr$');
  const thisKAttrs = factory.createPropertyAccessExpression(factory.createThis(), '_k_attrs');
  const thisKAttrsArrayAccess = factory.createElementAccessExpression(thisKAttrs, name);
  const subject = factory.createVariableDeclaration(attr, undefined, undefined, thisKAttrsArrayAccess);
  const subjectNext = factory.createPropertyAccessExpression(attr, 'next');
  const value = factory.createBinaryExpression(
    newValue,
    factory.createToken(SyntaxKind.QuestionQuestionToken),
    factory.createIdentifier('undefined')
  );
  const subjectNextCall = factory.createCallExpression(subjectNext, undefined, [value]);
  return factory.createBlock(
    [
      factory.createVariableStatement(undefined, factory.createVariableDeclarationList([subject], NodeFlags.Const)),
      factory.createExpressionStatement(subjectNextCall)
    ],
    true
  );
}
