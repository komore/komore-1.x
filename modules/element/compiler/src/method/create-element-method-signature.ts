import { type ElementMethodDefinition } from '@komore/element/compiler/processor';
import { type Identifier, type NodeFactory, type MethodSignature } from 'typescript';

/**
 * Creates an element method signature
 * ```ts
 * interface _ {
 *   functionName<TypeParameters>(parameters): ReturnType;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param methodDefinition Method definition
 * @returns Method signature and identifier
 */
export function createElementMethodSignature(
  factory: NodeFactory,
  methodDefinition: ElementMethodDefinition
): readonly [methodSignature: MethodSignature, identifier: Identifier] {
  const { functionName, functionDeclaration } = methodDefinition;
  const { parameters, type, typeParameters } = functionDeclaration;
  const identifier = factory.createIdentifier(functionName);
  const methodSignature = factory.createMethodSignature(
    undefined,
    identifier,
    undefined,
    typeParameters,
    parameters,
    type
  );
  return [methodSignature, identifier];
}
