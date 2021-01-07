import type { InterfaceDeclaration, NodeFactory } from 'typescript';
import { ElementDefinition } from '../definition/element-definition';
import { createElementHeritageClause } from './create-element-heritage-clause';

/**
 * Creates an element interface declaration
 *
 * An element interface declaration includes:
 * - an interface that extends the correct base element class
 * - typed and default overloads for addEventListener and removeEventListener
 *
 * ```ts
 * interface ClassName extends BaseClassName {
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @returns Class declaration node
 */
export function createElementClassDeclaration(
  factory: NodeFactory,
  elementDefinition: ElementDefinition
): InterfaceDeclaration {
  const { baseClassName, className } = elementDefinition;
  return factory.createInterfaceDeclaration(
    undefined,
    undefined,
    factory.createIdentifier(className),
    undefined,
    [createElementHeritageClause(factory, baseClassName)],
    []
  );
}
