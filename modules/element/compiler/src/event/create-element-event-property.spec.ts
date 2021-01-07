import { factory } from 'typescript';
import { createElementEventProperty } from './create-element-event-property';
import type { ElementEventDefinition } from './element-event-definition';

describe('Create element event property', () => {
  it('creates an event property with the event name matching a typed custom event', () => {
    // given: a list of event definitions
    const elementEventDefinition: ElementEventDefinition = {
      eventName: 'test-event',
      eventDetailsType: factory.createTypeReferenceNode('EventDetailType')
    };
    // when: creating an element event dictionary
    const elementEventDictionary = createElementEventProperty(factory, elementEventDefinition);
    // then: the correct source is generated
    expect(elementEventDictionary).toBeSource(`
      "test-event": CustomEvent<EventDetailType>;
    `);
  });

  it('creates an event property with a void custom event when no event detail type is provided', () => {
    // given: an event definition without an event detail type
    const elementEventDefinition: ElementEventDefinition = {
      eventName: 'test-event-void'
    };
    // when: creating an element event property
    const elementEventProperty = createElementEventProperty(factory, elementEventDefinition);
    // then: the correct source is generated
    expect(elementEventProperty).toBeSource(`
      "test-event-void": CustomEvent<void>;
    `);
  });
});
