import { factory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createDefineCustomElementCall } from './create-define-custom-element-call';

describe('Create define custom element call', () => {
  it('creates a customElement.define() call with no options for a normal custom element', () => {
    // given: an element definition for a normal custom element
    const elementDefinition: ElementDefinition = {
      className: 'TestElement',
      baseClassName: 'HTMLElement',
      tagName: 'test-element'
    };
    // when: creating a define custom element call
    const call = createDefineCustomElementCall(factory, elementDefinition);
    // then: the call passes the correct arguments without an extends option
    expect(call).toBeInlineSource('customElements.define("test-element", TestElement)');
  });

  it('creates a customElement.define() call with an extends option when extending a built-in element', () => {
    // given: an element definition for a custom element that extends a built-in element
    const elementDefinition: ElementDefinition = {
      className: 'TestElement',
      baseClassName: 'HTMLParagraphElement',
      baseTagName: 'p',
      tagName: 'test-element'
    };
    // when: creating a define custom element call
    const call = createDefineCustomElementCall(factory, elementDefinition);
    // then: the call passes the correct arguments with an extends option
    expect(call).toBeInlineSource('customElements.define("test-element", TestElement, { extends: "p" })');
  });
});
