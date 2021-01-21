import { factory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementEventMap } from './create-element-event-map';
import type { ElementEventDefinition } from './element-event-definition';

describe('Create element event map', () => {
  const elementDefinition: ElementDefinition = {
    baseClassName: 'HTMLElement',
    className: 'TestElement',
    tagName: 'test-element'
  };

  it('creates an event map with multiple event names mapped to custom event types', () => {
    // given: a list of event definitions
    const elementEventDefinitions: ReadonlyArray<ElementEventDefinition> = [
      {
        eventName: 'test-event-1',
        eventDetailsType: factory.createTypeReferenceNode('EventDetailType1')
      },
      {
        eventName: 'test-event-2'
      }
    ];
    // when: creating an element event map
    const [declaration, name] = createElementEventMap(factory, elementDefinition, elementEventDefinitions);
    // then: the correct source is generated
    expect(declaration).toBeSource(`
      export interface ${elementDefinition.className}EventMap extends ${elementDefinition.baseClassName}EventMap {
        "test-event-1": CustomEvent<EventDetailType1>;
        "test-event-2": CustomEvent<void>;
      }
    `);
    expect(name.text).toBe(`${elementDefinition.className}EventMap`);
  });

  it('creates an empty event map where there are no user-defined event types', () => {
    // given: an empty list of event definitions
    const elementEventDefinitions: ReadonlyArray<ElementEventDefinition> = [];
    // when: creating an element event map
    const [declaration, name] = createElementEventMap(factory, elementDefinition, elementEventDefinitions);
    // then: the correct source is generated
    expect(declaration).toBeSource(`
      export interface ${elementDefinition.className}EventMap extends ${elementDefinition.baseClassName}EventMap {
      }
    `);
    expect(name.text).toBe(`${elementDefinition.className}EventMap`);
  });
});
