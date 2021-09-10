import { createPropertyAccess } from '@komore/typescript/compiler';
import { factory } from 'typescript';
import { createLifecycleCallbackMethod } from './create-lifecycle-callback-method';

describe('Create lifecycle callback method', () => {
  it('creates a lifecycle callback method', () => {
    given: 'a method name, a subject expression and element lifecycle event type';
    const methodName = 'testMethod';
    const subjectExpression = createPropertyAccess(factory, factory.createThis(), 'testSubject');
    const elementLifecycleEventType = 'connected';
    when: 'creating a lifecycle callback method';
    const [declaration, identifier] = createLifecycleCallbackMethod(
      factory,
      methodName,
      subjectExpression,
      elementLifecycleEventType
    );
    expect: 'a correct method declaration to have been created';
    expect(declaration).toBeSource(`
      ${methodName}(): void {
        this.testSubject.next({
          type: '${elementLifecycleEventType}'
        });
      }
    `);
    and: 'the identifier to match the method name';
    expect(identifier.text).toBe(methodName);
  });
});
