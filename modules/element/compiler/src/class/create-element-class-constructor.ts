import type { ConstructorDeclaration, NodeFactory } from 'typescript';

/**
 * Creates an element class constructor
 * @param factory TypeScript node factory
 * @returns Constructor declaration
 */
export function createElementClassConstructor(factory: NodeFactory): ConstructorDeclaration {
  const superCall = factory.createExpressionStatement(
    factory.createCallExpression(factory.createSuper(), undefined, undefined)
  );
  const constructorBody = factory.createBlock([superCall], true);
  return factory.createConstructorDeclaration(undefined, undefined, [], constructorBody);
}
