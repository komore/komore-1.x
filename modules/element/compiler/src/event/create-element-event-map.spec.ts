import { factory } from 'typescript';
import { type ElementEventDefinition } from '../definition/element-event-definition';
import { createElementEventMap } from './create-element-event-map';

describe('Create element event map', () => {
  it('creates an event map with multiple event names mapped to custom event types', () => {
    given: 'an element class name and a a list of event definitions';
    const elementClassName = 'TestElement';
    const elementEventDefinitions: ReadonlyArray<ElementEventDefinition> = [
      {
        eventName: 'test-event-1',
        eventDetailsType: factory.createTypeReferenceNode('EventDetailType1')
      },
      {
        eventName: 'test-event-2'
      }
    ];
    when: 'creating an element event map';
    const [declaration, name] = createElementEventMap(factory, elementClassName, elementEventDefinitions);
    expect: 'a correct interface inheriting HTMLElementEventMap and mapping each event type to be created';
    expect(declaration).toBeSource(`
      export interface ${elementClassName}EventMap extends HTMLElementEventMap {
        "test-event-1": CustomEvent<EventDetailType1>;
        "test-event-2": CustomEvent<void>;
      }
    `);
    expect(name.text).toBe(`${elementClassName}EventMap`);
  });

  it('creates an empty event map where there are no user-defined event types', () => {
    given: 'an element class naem and an empty list of event definitions';
    const elementClassName = 'TestElement';
    const elementEventDefinitions: ReadonlyArray<ElementEventDefinition> = [];
    when: 'creating an element event map';
    const [declaration, name] = createElementEventMap(factory, elementClassName, elementEventDefinitions);
    expect: 'a correct interface inheriting HTMLElementEventMap without any property signature to be created';
    expect(declaration).toBeSource(`
      export interface ${elementClassName}EventMap extends HTMLElementEventMap {
      }
    `);
    expect(name.text).toBe(`${elementClassName}EventMap`);
  });
});
