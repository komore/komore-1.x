import { createPropertyAccess } from '@komore/typescript/compiler';
import { factory } from 'typescript';
import { createDisconnectedCallbackMethod } from './create-disconnected-callback-method';

describe('Create disconnectedCallback method', () => {
  it('creates a correct disconnectedCallback method definition', () => {
    given: 'a subject expression';
    const subjectExpression = createPropertyAccess(factory, factory.createThis(), 'testSubject');
    when: 'creating a disconnectedCallback method';
    const [declaration, identifier] = createDisconnectedCallbackMethod(factory, subjectExpression);
    expect: 'a correct method declaration to have been created';
    expect(declaration).toBeSource(`
      disconnectedCallback(): void {
        this.testSubject.next({
          type: 'disconnected'
        });
      }
    `);
    and: 'the identifier to match the method name';
    expect(identifier.text).toBe('disconnectedCallback');
  });
});
