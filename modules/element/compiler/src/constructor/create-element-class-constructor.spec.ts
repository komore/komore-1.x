import { factory } from 'typescript';
import { ElementCompilerContext } from '../element-compiler-context';
import { createElementClassConstructor } from './create-element-class-constructor';

describe('Create element class constructor', () => {
  const mockImportFunction = jest.fn<ElementCompilerContext['import']>;
  const baseElementCompilerContext: ElementCompilerContext = {
    factory,
    import: jest.fn(),
    optimizations: {

    }
  };

  beforeEach(() => baseElementCompilerContext.import.)

  it('creates an element class constructor', () => {
    given: 'a template element and style sheets identifiers';
    const templateElement = factory.createIdentifier('templateElement');
    const styleSheets = factory.createIdentifier('styleSheets');
    when: 'creating an element class constructor';
    const constructorDeclaration = createElementClassConstructor(factory, templateElement, styleSheets);
    expect: 'a correct constructor declaration to have been created';
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
    given: 'a template element identifier';
    const templateElement = factory.createIdentifier('templateElement');
    when: 'creating an element class constructor';
    const constructorDeclaration = createElementClassConstructor(factory, templateElement, undefined);
    expect: 'a construction declaration without a style sheet adoption statement to have been created';
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
