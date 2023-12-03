import { type ElementEventDefinition } from '@komore/element/compiler/processor';
import { factory } from 'typescript';
import { createElementEventMapInterfaceDeclaration } from './create-element-event-map-interface-declaration';

describe('Create element event map', () => {
  it('creates an event map with multiple event names mapped to custom event types', () => {
    given: 'an interface name and a base element class name';
    const interfaceName = 'TestEventMap';
    const baseElementClassName = 'HTMLElement';
    and: 'a list of event definitions';
    const eventName1 = 'test-event-1';
    const eventName2 = 'test-event-2';
    const elementEventDefinitions: ReadonlyArray<ElementEventDefinition> = [
      {
        eventName: eventName1,
        eventDetailsType: factory.createTypeReferenceNode('EventDetailType1')
      },
      {
        eventName: eventName2
      }
    ];
    when: 'creating an element event map';
    const [declaration, name] = createElementEventMapInterfaceDeclaration(
      factory,
      interfaceName,
      baseElementClassName,
      elementEventDefinitions
    );
    expect: 'a correct interface inheriting HTMLElementEventMap and mapping each event type to be created';
    expect(declaration).toBeSource(`
      interface ${interfaceName} extends HTMLElementEventMap {
        "${eventName1}": CustomEvent<EventDetailType1>;
        "${eventName2}": CustomEvent<void>;
      }
    `);
    expect(name.text).toBe(interfaceName);
  });

  // TODO: some baseElementClassName's should lead to a different base class for the event map
});
