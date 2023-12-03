import { factory } from 'typescript';
import { createElementCustomCSSStyleDeclaration } from './create-element-css-style-declaration';

describe('Create element custom CSS style declaration', () => {
  it('can create an element CSS style interface declaration', () => {
    given: 'an element class name and a custom property map type';
    const elementClassName = 'TestElement';
    const customPropertyMap = 'TestCustomProperties';
    const customPropertyMapType = factory.createTypeReferenceNode(customPropertyMap);
    when: 'creating an element custom CSS style declaration';
    const [interfaceDeclaration, identifier] = createElementCustomCSSStyleDeclaration(
      factory,
      elementClassName,
      customPropertyMapType
    );
    expect: 'an interface declaration with a typed setProperty to be created';
    expect(interfaceDeclaration).toBeSource(`
      interface ${elementClassName}CSSStyleDeclaration {
        setProperty<K extends keyof ${customPropertyMap}>(customProperty: K, value: ${customPropertyMap}[K] | null): void;
      }
    `);
    expect(identifier.text).toBe(`${elementClassName}CSSStyleDeclaration`);
  });
});
