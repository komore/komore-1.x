import { factory } from 'typescript';
import { createElementEventListenerMethods } from './create-element-event-listener-methods';

describe('Create element event listener methods', () => {
  it('creates event listened method signatures', () => {
    given: 'an element and an event map type';
    const elementType = factory.createTypeReferenceNode('ElementType');
    const eventMapType = factory.createTypeReferenceNode('EventMapType');
    when: 'creating an element event listener methods';
    const methodSignatures = createElementEventListenerMethods(factory, elementType, eventMapType);
    expect: 'the correct method signatures to have been created';
    expect(methodSignatures.length).toBe(4);
  });
});
