import { factory } from 'typescript';
import { createElementObservedAttributesGetter } from './create-element-observed-attributes-getter';

describe('Create element observed attributes getter', () => {
  it('creates a static getter that returns the list of observed attributes', () => {
    // given: a list of attribute names
    const attributeNames = ['test-a', 'test-b'];
    // when: creating the observed attributs getts
    const accessorDeclaration = createElementObservedAttributesGetter(factory, attributeNames);
    // then: the correct declaration is created
    expect(accessorDeclaration).toBeSource(`
      static get observedAttributes() {
        return [
          "test-a",
          "test-b"
        ] as const;
      }
    `);
  });
});
