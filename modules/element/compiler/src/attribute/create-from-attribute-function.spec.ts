import { factory } from 'typescript';
import { createFromAttributeFunction } from './create-from-attribute-function';

describe('Create fromAttribute function', () => {
  it('can create a fromAttribute function method declaration', () => {
    given: 'an attribute map';
    const attributeMap = factory.createTypeReferenceNode('TestAttributeMap');
    when: 'creating a fromAttribute function';
    const [declaration, identifier] = createFromAttributeFunction(factory, attributeMap);
    expect: 'a correctly typed fromAttribute function declaration to be created';
    expect(declaration).toBeSource(`
      const fromAttribute: FromAttribute<TestAttributeMap> = name => this.#testSubject.pipe(
        filter(({ attributeName }) => attributeName === name)
      );
    `);
    expect(identifier.text).toBe('fromAttribute');
  });
});
