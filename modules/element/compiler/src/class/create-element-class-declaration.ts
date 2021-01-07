import type { ClassDeclaration, NodeFactory } from 'typescript';
import { ElementDefinition } from '../definition/element-definition';
import { createElementClassConstructor } from './create-element-class-constructor';
import { createElementHeritageClause } from './create-element-heritage-clause';

/**
 * Creates an element class declaration
 * ```ts
 * class ClassName extends BaseClassName {
 *   constructor() {
 *     super();
 *   }
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @returns Class declaration node
 */
export function createElementClassDeclaration(
  factory: NodeFactory,
  elementDefinition: ElementDefinition
): ClassDeclaration {
  const { baseClassName, className } = elementDefinition;
  return factory.createClassDeclaration(
    undefined,
    undefined,
    factory.createIdentifier(className),
    undefined,
    [createElementHeritageClause(factory, baseClassName)],
    [createElementClassConstructor(factory)]
  );
}
