import type { Identifier, NodeFactory, MethodSignature } from 'typescript';
import type { ElementMethodDefinition } from '../definition/element-method-definition';

/**
 * Creates an element method signature
 * ```ts
 * interface _ {
 *   functionName<TypeParameters>(parameters): ReturnType;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param propertyDefinition Property definition
 * @returns Method signature and identifier
 */
export function createElementMethodSignature(
  factory: NodeFactory,
  methodDefinition: ElementMethodDefinition
): [MethodSignature, Identifier] {
  const { functionName, functionDeclaration } = methodDefinition;
  const { parameters, type, typeParameters } = functionDeclaration;
  const identifier = factory.createIdentifier(functionName);
  const signature = factory.createMethodSignature(undefined, identifier, undefined, typeParameters, parameters, type);
  return [signature, identifier];
}
