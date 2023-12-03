import { factory } from 'typescript';
import { createElementStyleProperty } from './create-element-style-property';

describe('Create element style property', () => {
  it('can create an elemet style property', () => {
    given: 'a CSS style declaration type';
    const elementCssStyleDeclaration = 'TestElementCssStyleDeclaration';
    const elementCssStyleDeclarationType = factory.createTypeReferenceNode(elementCssStyleDeclaration);
    when: 'creating an element style property';
    const [propertySignature, identifier] = createElementStyleProperty(factory, elementCssStyleDeclarationType);
    expect: 'a style property that augments CSSStyleDeclaration with the element style declarations';
    expect(propertySignature).toBeInlineSource(`readonly style: CSSStyleDeclaration & ${elementCssStyleDeclaration};`);
    expect(identifier.text).toBe('style');
  });
});
