import { factory } from 'typescript';
import { createFromAttributeFunctionType } from './create-from-attribute-function-type';

describe('Create fromAttribute function type', () => {
  it('can create a fromAttribute function method declaration', () => {
    given: 'an element class name and an attribute map';
    const elementClassName = 'TestElementClass';
    const attributeMap = factory.createTypeReferenceNode('TestAttributeMap');
    when: 'creating a fromAttribute function type';
    const [typeDeclaration, identifier] = createFromAttributeFunctionType(factory, elementClassName, attributeMap);
    expect: 'a correctly typed fromAttribute function declaration to be created';
    expect(typeDeclaration).toBeSource(`
      type ${elementClassName}FromAttribute = FromAttribute<TestAttributeMap>;
    `);
    expect(identifier.text).toBe(`${elementClassName}FromAttribute`);
  });
});
