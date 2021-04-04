import { factory } from 'typescript';
import { createElementRemoveEventListener } from './create-element-remove-event-listener';
import { createEventMapIndexParameter } from './element-event-listener-helpers';
import type { EventListenerTypedInformation } from './event-listener-typed-information';

describe('Create element remove event listeners', () => {
  it('can create a default removeEventListener method declaration', () => {
    when: 'creating a default removeEventListener method declaration';
    const removeEventListener = createElementRemoveEventListener(factory);
    expect: 'a method declaration with the correct signature to have been created';
    expect(removeEventListener).toBeInlineSource(
      'removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;'
    );
  });

  it('can create a typed addEventListener method declaration', () => {
    given: 'event listener typed information';
    const eventMapType = factory.createTypeReferenceNode('EvMap');
    const typedInfo: EventListenerTypedInformation = {
      elementType: factory.createTypeReferenceNode('El'),
      eventMapType,
      eventMapIndex: createEventMapIndexParameter(factory, eventMapType)
    };
    when: 'creating a typed removeEventListener method declaration';
    const removeEventListener = createElementRemoveEventListener(factory, typedInfo);
    expect: 'a method declaration with the correct signature to have been created';
    expect(removeEventListener).toBeInlineSource(
      'removeEventListener<K extends keyof EvMap>(type: K, listener: (this: El, event: EvMap[K]) => any, options?: boolean | EventListenerOptions): void;'
    );
  });
});
