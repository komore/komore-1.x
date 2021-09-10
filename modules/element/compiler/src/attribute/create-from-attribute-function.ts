import { createArrowFunction, createExtendsKeyof, createObjectBindingPattern, createParameter, createPropertyAccess } from '@komore/typescript/compiler';
import type { ArrowFunction, Block, Expression, Identifier, TypeReferenceNode } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { CompilerContext } from '../codegen/compiler-context';

/**
 * Creates a fromAttribute function
 * ```ts
 * name => subjectExpression.pipe(
 *   filter(({ attributeName }) => attributeName === name)
 * );
 * ```
 * @param factory TypeScript node factory
 * @param subjectExpression Subject expression
 * @returns Arrow function and identifier
 */
export function createFromAttributeFunction(
  context: CompilerContext,
  subjectExpression: Expression
): ArrowFunction {
  const factory = context.factory;
  const [nameParameter, name] = createParameter(factory, 'name');
  const functionBody = createFromAttributeFunctionBody(context, subjectExpression, name);
  return createArrowFunction(factory, [nameParameter], functionBody);
}

function createFromAttributeFunctionBody(context: CompilerContext, subjectExpression: Expression, name: Identifier): Block {
  const factory = context.factory;
  factory.createBlock(statements, true);
}

function createFromAttributeFunctionObservable(context: CompilerContext, subjectExpression: Expression): unknown {
  const factory = context.factory;
  const pipeFunction = createPropertyAccess(factory, subjectExpression, 'pipe');
  const filter = context.import({
    path: '@komore/reactive/operators',
    name: 'filter'
  });
  const filterPredicate = createFromAttributeFunctionObservableFilterPredicate(context);
  return factory.createCallExpression(filter, undefined, [filterPredicate]);
}

function createFromAttributeFunctionObservableFilterPredicate(context: CompilerContext, name: Identifier): ArrowFunction {
  const factory = context.factory;
  const attributeName = factory.createIdentifier('attributeName');
  const equalSign = factory.createToken(SyntaxKind.EqualsEqualsEqualsToken);
  const structuredParameter = createObjectBindingPattern(factory, [attributeName]);
  createParameter(factory, )
  factory.createParameterDeclaration(undefined, undefined, undefined, )
  factory.createBinaryExpression(attributeName, equalSign, name);

  return createArrowFunction(factory, )
}
  factory.createCallExpression(filter, undefined, )
  factory.createCallExpression(
    factory.createIdentifier("filter"),
    undefined,
    [factory.createArrowFunction(
      undefined,
      undefined,
      [factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        factory.createObjectBindingPattern([factory.createBindingElement(
          undefined,
          undefined,
          factory.createIdentifier("attributeName"),
          undefined
        )]),
        undefined,
        undefined,
        undefined
      )],
      undefined,
      factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      factory.createBinaryExpression(
        factory.createIdentifier("attributeName"),
        factory.createToken(ts.SyntaxKind.EqualsEqualsEqualsToken),
        factory.createIdentifier("name")
      )
    )]
  )

  const pipeFunctionArguments = [];
  factory.createCallExpression(pipeFunction, undefined, pipeFunctionArguments);
}
