import { type ElementEventDefinition } from '@komore/element/compiler/processor';
import { factory } from 'typescript';
import { createElementEventProperty } from './create-element-event-property';

describe('Create element event property', () => {
  it('creates an event property with the event name matching a typed custom event', () => {
    given: 'a list of event definitions';
    const eventName = 'test-event';
    const eventDetailsTypeName = 'EventDetailType';
    const elementEventDefinition: ElementEventDefinition = {
      eventName,
      eventDetailsType: factory.createTypeReferenceNode(eventDetailsTypeName)
    };
    when: 'creating an element event dictionary';
    const elementEventDictionary = createElementEventProperty(factory, elementEventDefinition);
    expect: 'a property signature with the event name and custom event type to have been created';
    expect(elementEventDictionary).toBeSource(`
      "${eventName}": CustomEvent<${eventDetailsTypeName}>;
    `);
  });

  it('creates an event property with a void custom event when no event detail type is provided', () => {
    given: 'an event definition without an event detail type';
    const eventName = 'test-event-void';
    const elementEventDefinition: ElementEventDefinition = {
      eventName
    };
    when: 'creating an element event property';
    const elementEventProperty = createElementEventProperty(factory, elementEventDefinition);
    expect: 'a property signature with the event name and a void custom event type to have been created';
    expect(elementEventProperty).toBeSource(`
      "${eventName}": CustomEvent<void>;
    `);
  });
});
