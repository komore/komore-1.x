import { factory } from 'typescript';
import { createWatchAttributeMethod } from './create-watch-attribute-method';

describe('Create watch attribute method', () => {
  it('can create a watchAttribute method declaration', () => {
    given: 'an attribute map'
    const attributeMap = factory.createTypeReferenceNode('TestAttributeMap');
    when: 'creating a watchAttribute method'
    const [methodDeclaration, identifier] = createWatchAttributeMethod(factory, attributeMap);
    expect: 'a correctly typed private watchAttribute method declaration to be created'
    expect(methodDeclaration).toBeSource(`
      private watchAttribute<K extends keyof TestAttributeMap>(name: K): Observable<TestAttributeMap[K] | undefined> {
        return this._ka[name].$;
      }
    `);
    expect(identifier.text).toBe('watchAttribute');
  });
});
