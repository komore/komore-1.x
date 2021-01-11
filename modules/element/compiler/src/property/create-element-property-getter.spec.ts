import { factory } from 'typescript';
import { createElementPropertyGetter } from './create-element-property-getter';
import { ElementPropertyDefinition } from './element-property-definition';

describe('Create element property getter', () => {
  it('works', () => {
    // given: a property definition
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty'
    };
    // when: creating an element property getter
    const getAccessorDeclaration = createElementPropertyGetter(factory, propertyDefinition);
    // then: a correct get accessor declaration is created
    expect(getAccessorDeclaration).toBeSource(`
      get testProperty() {
        return this._kp.testProperty.s.value;
      }
    `);
  });
});
