import { factory } from 'typescript';
import { createElementClassConstructor } from './create-element-class-constructor';

describe('Create element class constructor', () => {
  it('creates an element class constructor', () => {
    // when: creating an element class constructor
    const constructorDeclaration = createElementClassConstructor(factory);
    // then: the correct constructor declaration is created
    expect(constructorDeclaration).toBeSource(`
      constructor() {
        super();
      }
    `);
  });
});
