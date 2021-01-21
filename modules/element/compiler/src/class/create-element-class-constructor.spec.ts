import { factory } from 'typescript';
import { createElementClassConstructor } from './create-element-class-constructor';

describe('Create element class constructor', () => {
  it('creates an element class constructor', () => {
    given: 'a template element and style sheets identifiers'
    const templateElement = factory.createIdentifier('templateElement');
    const styleSheets = factory.createIdentifier('styleSheets');
    when: 'creating an element class constructor'
    const constructorDeclaration = createElementClassConstructor(factory, templateElement, styleSheets);
    then: 'the correct constructor declaration is created'
    expect(constructorDeclaration).toBeSource(`
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const templateContent = templateElement.content.cloneNode(true);
        shadowRoot.adoptedStyleSheets = styleSheets;
        shadowRoot.append(templateContent);
      }
    `);
  });

  it('does not include style sheet adoption when no style sheets are defined', () => {
    given: 'a template element identifier'
    const templateElement = factory.createIdentifier('templateElement');
    when: 'creating an element class constructor'
    const constructorDeclaration = createElementClassConstructor(factory, templateElement, undefined);
    then: 'the correct construction declaration is created, without a style sheet adoption statement'
    expect(constructorDeclaration).toBeSource(`
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const templateContent = templateElement.content.cloneNode(true);
        shadowRoot.append(templateContent);
      }
    `);
  });
});
