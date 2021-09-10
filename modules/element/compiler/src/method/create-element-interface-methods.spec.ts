import { factory } from 'typescript';
import type { ElementMethodDefinition } from '../definition/element-method-definition';
import { createElementInterfaceMethods } from './create-element-interface-methods';

describe('Create element interface methods', () => {
  it('returns an empty list when there are no method definitions', () => {
    given: 'an empty list of method definitions';
    const methodDefinitions: ReadonlyArray<ElementMethodDefinition> = [];
    when: 'creating methods for an element interface';
    const methods = createElementInterfaceMethods(factory, methodDefinitions);
    expect: 'an empty list to be returned';
    expect(methods.length).toBe(0);
  });
});
