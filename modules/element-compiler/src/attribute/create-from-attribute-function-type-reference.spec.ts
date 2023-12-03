import { factory } from 'typescript';
import { createMockElementCompilerContext } from '../test-helpers.spec';
import { createFromAttributeFunctionTypeReference } from './create-from-attribute-function-type-reference';

describe('Create fromAttribute function type reference', () => {
  it('can create a fromAttribute function method declaration', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an attribute map';
    const attributeMapName = 'TestAttributeMap';
    const attributeMap = factory.createTypeReferenceNode(attributeMapName);
    when: 'creating a fromAttribute function type';
    const fromAttributeTypeReferenceNode = createFromAttributeFunctionTypeReference(context, attributeMap);
    expect: 'a correctly typed fromAttribute function type reference to have been created';
    expect(fromAttributeTypeReferenceNode).toBeInlineSource(`FromAttribute<keyof ${attributeMapName}>`);
    and: 'FromAttribute to have been imported from @komore/element';
    expect(context.resolveImport).toHaveBeenCalledTimes(1);
    expect(context.resolveImport).toHaveBeenCalledWith({ name: 'FromAttribute', path: '@komore/element', type: true });
  });
});
