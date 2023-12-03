import { factory } from 'typescript';
import { createElementAddEventListener } from './create-element-add-event-listener';
import { createEventMapIndexParameter } from './element-event-listener-helpers';
import { type EventListenerTypedInformation } from './event-listener-typed-information';

describe('Create element add event listeners', () => {
  it('can create a default addEventListener method declaration', () => {
    when: 'creating a default addEventListener method declaration';
    const addEventListener = createElementAddEventListener(factory);
    expect: 'a method declaration with the correct addEventListener signature to have been created';
    expect(addEventListener).toBeInlineSource(
      'addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;'
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
    when: 'creating a typed addEventListener method declaration';
    const addEventListener = createElementAddEventListener(factory, typedInfo);
    expect: 'a method declaration with the correct addEventListener signature to have been created';
    expect(addEventListener).toBeInlineSource(
      'addEventListener<K extends keyof EvMap>(type: K, listener: (this: El, event: EvMap[K]) => any, options?: boolean | AddEventListenerOptions): void;'
    );
  });
});
