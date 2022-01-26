import { type ElementMethodDefinition } from '@komore/element/compiler/processor';
import { type MethodSignature, type NodeFactory } from 'typescript';
import { createElementMethodSignature } from './create-element-method-signature';

/**
 * Creates an element interface's method signatures
 * @param factory TypeScript node factory
 * @param methodDefinitions Method definitions
 * @returns List of method signatures
 */
export function createElementInterfaceMethods(
  factory: NodeFactory,
  methodDefinitions: ReadonlyArray<ElementMethodDefinition>
): ReadonlyArray<MethodSignature> {
  return methodDefinitions.map(toMethodSignature(factory));
}

/**
 * Returns a function that turns a method definition into a method signature
 * @param factory TypeScript node factory
 * @returns Function that turns a method definition into a method signature
 */
function toMethodSignature(factory: NodeFactory): (methodDefinition: ElementMethodDefinition) => MethodSignature {
  return methodDefinition => {
    const [methodSignature] = createElementMethodSignature(factory, methodDefinition);
    return methodSignature;
  };
}
