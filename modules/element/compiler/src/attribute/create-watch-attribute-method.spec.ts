import { factory } from 'typescript';
import { createWatchAttributeMethod } from './create-watch-attribute-method';

describe('Create watch attribute method', () => {
  it('works', () => {
    // given: an attribute map
    const attributeMap = factory.createTypeReferenceNode('TestAttributeMap');
    // when: creating a watchAttribute method
    const methodDeclaration = createWatchAttributeMethod(factory, attributeMap);
    // then: a correct method declaration is created
    expect(methodDeclaration).toBeSource(`
      watchAttribute<K extends keyof TestAttributeMap>(name: K): Observable<TestAttributeMap[K] | undefined> {
        return this._ka[name].$;
      }
    `);
  });
});
