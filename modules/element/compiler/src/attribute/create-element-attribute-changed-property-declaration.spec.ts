import { createMockElementCompilerContext } from '../test-helpers.spec';
import { createElementAttributeChangedPropertyDeclaration } from './create-element-attribute-changed-property-declaration';

describe('Create element attribute changed property declaration', () => {
  it('creates an element attribute changed property declaration', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an element attribute map reference node';
    const elementAttributeMapName = 'TestElementAttributeMap';
    const elementAttributeMapTypeReferenceNode = context.factory.createTypeReferenceNode(
      context.factory.createIdentifier(elementAttributeMapName)
    );
    when: 'creating an element attribute changed property declaration';
    const [propertyDeclaration, identifier] = createElementAttributeChangedPropertyDeclaration(
      context,
      elementAttributeMapTypeReferenceNode
    );
    expect: 'a property declaration for a private #α property to have been created';
    expect(propertyDeclaration).toBeInlineSource(`#α = new Subject<keyof ${elementAttributeMapName}>();`);
    and: 'the identifier to be #α';
    expect(identifier.text).toBe('#α');
  });
});
