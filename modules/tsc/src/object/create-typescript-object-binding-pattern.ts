import { type BindingElement, type Identifier, type NodeFactory, type ObjectBindingPattern } from 'typescript';

export function createTypeScriptObjectBindingPattern(
  factory: NodeFactory,
  names: ReadonlyArray<string | Identifier>
): ObjectBindingPattern {
  const bindingElements = names.map(toBindingElement(factory));
  return factory.createObjectBindingPattern(bindingElements);
}

function toBindingElement(factory: NodeFactory): (name: string | Identifier) => BindingElement {
  return name => factory.createBindingElement(undefined, undefined, name, undefined);
}
