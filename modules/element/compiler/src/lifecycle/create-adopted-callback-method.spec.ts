import { createPropertyAccess } from '@komore/typescript/compiler';
import { factory } from 'typescript';
import { createAdoptedCallbackMethod } from './create-adopted-callback-method';

describe('Create adoptedCallback method', () => {
  it('creates a correct adoptedCallback method definition', () => {
    given: 'a subject expression';
    const subjectExpression = createPropertyAccess(factory, factory.createThis(), 'testSubject');
    when: 'creating a adoptedCallback method';
    const [declaration, identifier] = createAdoptedCallbackMethod(factory, subjectExpression);
    expect: 'a correct method declaration to have been created';
    expect(declaration).toBeSource(`
      adoptedCallback(): void {
        this.testSubject.next({
          type: 'adopted'
        });
      }
    `);
    and: 'the identifier to match the method name';
    expect(identifier.text).toBe('adoptedCallback');
  });
});
