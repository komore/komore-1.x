import { factory } from 'typescript';
import { type ElementEventDefinition } from '../definition/element-event-definition';
import { createElementEventProperty } from './create-element-event-property';

describe('Create element event property', () => {
  it('creates an event property with the event name matching a typed custom event', () => {
    given: 'a list of event definitions';
    const elementEventDefinition: ElementEventDefinition = {
      eventName: 'test-event',
      eventDetailsType: factory.createTypeReferenceNode('EventDetailType')
    };
    when: 'creating an element event dictionary';
    const elementEventDictionary = createElementEventProperty(factory, elementEventDefinition);
    expect: 'a property signature with the event name and custom event type to have been created';
    expect(elementEventDictionary).toBeSource(`
      "test-event": CustomEvent<EventDetailType>;
    `);
  });

  it('creates an event property with a void custom event when no event detail type is provided', () => {
    given: 'an event definition without an event detail type';
    const elementEventDefinition: ElementEventDefinition = {
      eventName: 'test-event-void'
    };
    when: 'creating an element event property';
    const elementEventProperty = createElementEventProperty(factory, elementEventDefinition);
    expect: 'a property signature with the event name and a void custom event type to have been created';
    expect(elementEventProperty).toBeSource(`
      "test-event-void": CustomEvent<void>;
    `);
  });
});
