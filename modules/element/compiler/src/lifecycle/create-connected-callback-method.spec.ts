import { createPropertyAccess } from '@komore/typescript/compiler';
import { factory } from 'typescript';
import { createConnectedCallbackMethod } from './create-connected-callback-method';

describe('Create connectedCallback method', () => {
  it('creates a correct connectedCallback method definition', () => {
    given: 'a subject expression';
    const subjectExpression = createPropertyAccess(factory, factory.createThis(), 'testSubject');
    when: 'creating a connectedCallback method';
    const [declaration, identifier] = createConnectedCallbackMethod(factory, subjectExpression);
    expect: 'a correct method declaration to have been created';
    expect(declaration).toBeSource(`
      connectedCallback(): void {
        this.testSubject.next({
          type: 'connected'
        });
      }
    `);
    and: 'the identifier to match the method name';
    expect(identifier.text).toBe('connectedCallback');
  });
});
