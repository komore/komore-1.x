import type { BindingElement, Identifier, NodeFactory, ObjectBindingPattern } from 'typescript';

export function createObjectBindingPattern(
  factory: NodeFactory,
  names: ReadonlyArray<string | Identifier>
): ObjectBindingPattern {
  const bindingElements = names.map(toBindingElement(factory));
  return factory.createObjectBindingPattern(bindingElements);
}

function toBindingElement(factory: NodeFactory): (name: string | Identifier) => BindingElement {
  return name => factory.createBindingElement(undefined, undefined, name, undefined);
}
