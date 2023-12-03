import { createPropertyAccess } from '@komore/typescript/compiler';
import { factory } from 'typescript';
import { createElementAttributeChangedCallback } from './create-element-attribute-changed-callback';

describe('Create element attribute changed callback', () => {
  it('creates a correct attributeChangedCallback method definition', () => {
    given: 'a subject expression';
    const subjectExpression = createPropertyAccess(factory, factory.createThis(), '#testSubject');
    when: 'creating an element attribute changed callback';
    const [declaration, identifier] = createElementAttributeChangedCallback(factory, subjectExpression);
    expect: 'a declaration for an attributeChangedCallback method to be created';
    expect(declaration).toBeSource(`
      attributeChangedCallback(attributeName: string, oldValue: string | null, newValue: string | null): void {
        this.#testSubject.next({
          attributeName,
          newValue,
          oldValue
        });
      }
    `);
    and: 'the identifier to be attributeChangedCallback';
    expect(identifier.text).toBe('attributeChangedCallback');
  });
});
