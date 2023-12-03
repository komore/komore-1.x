import { factory } from 'typescript';
import {
  createAddRemoveEventListenerMethodSignature,
  createEventMapIndexParameter
} from './element-event-listener-helpers';
import { type EventListenerTypedInformation } from './event-listener-typed-information';

describe('Element event listener helpers', () => {
  describe('Create event map index parameter', () => {
    // TODO
  });

  describe('Create add/remove event listener method signature', () => {
    it('can create a default add/remove event listener method signature', () => {
      when: 'creating a default event listener type parameter declaration';
      const methodSignature = createAddRemoveEventListenerMethodSignature(factory, 't', 'Op');
      then: 'the type parameter is declared as a string';
      expect(methodSignature).toBeInlineSource(
        't(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | Op): void;'
      );
    });

    it('can create a typed add/remove event listener method signature', () => {
      given: 'event listener typed information';
      const eventMapType = factory.createTypeReferenceNode('EvMap');
      const typedInfo: EventListenerTypedInformation = {
        elementType: factory.createTypeReferenceNode('El'),
        eventMapType,
        eventMapIndex: createEventMapIndexParameter(factory, eventMapType)
      };
      when: 'creating a typed event listener type parameter declaration';
      const methodSignature = createAddRemoveEventListenerMethodSignature(factory, 't', 'Op', typedInfo);
      then: 'the type parameter is declared as the event map key';
      expect(methodSignature).toBeInlineSource(
        't<K extends keyof EvMap>(type: K, listener: (this: El, event: EvMap[K]) => any, options?: boolean | Op): void;'
      );
    });
  });
});
