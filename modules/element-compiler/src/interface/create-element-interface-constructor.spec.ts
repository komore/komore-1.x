import { factory } from 'typescript';
import { type ElementDefinition } from '../definition/element-definition';
import { createElementInterfaceConstructor } from './create-element-interface-constructor';

describe('Create element interface constructor', () => {
  it('creates an element interface constructor declaration', () => {
    given: 'an element definition';
    const className = 'TestElement';
    const elementDefinition: ElementDefinition = {
      baseClassName: 'HTMLElement',
      className,
      tagName: 'test-element'
    };
    when: 'creating an element interface constructor';
    const declaration = createElementInterfaceConstructor(factory, elementDefinition);
    expect: 'a constructor declaration to be created';
    expect(declaration).toBeSource(`
      ${className}: {
        new (): ${className};
      }
    `);
  });
});
