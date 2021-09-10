import { factory } from 'typescript';
import { createFromAttributeVariableDeclaration } from './create-from-attribute-variable-declaration';

describe('Create fromAttribute variable declaration', () => {
  it('can create a fromAttribute variable declaration', () => {
    given: 'an attribute map';
    const attributeMap = factory.createTypeReferenceNode('TestAttributeMap');
    when: 'creating a fromAttribute variable declaration';
    const [declaration, identifier] = createFromAttributeVariableDeclaration(factory, attributeMap);
    expect: 'a correctly typed fromAttribute function declaration to be created';
    expect(declaration).toBeSource(`
      const fromAttribute: FromAttribute<TestAttributeMap> = name => this.#testSubject.pipe(
        filter(({ attributeName }) => attributeName === name)
      );
    `);
    expect(identifier.text).toBe('fromAttribute');
  });
});
