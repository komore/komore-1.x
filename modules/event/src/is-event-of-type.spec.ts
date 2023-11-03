import { feature } from '@komore/testing';
import { testDomain } from '@komore/domain/testing';

import { isEventOfType } from './is-event-of-type';
import { eventProperties } from './properties/event-properties';
import { createEventType } from './type/create-event-type';

feature('Is event of type', () => {
  given: 'event types';
  const eventType1 = createEventType(testDomain, { test1: eventProperties() });
  const eventType2 = createEventType(testDomain, { test2: eventProperties() });
  and: 'an event';
  const event = eventType1.test1();

  return {
    'returns true when a type matches'() {
      when: 'creating functions that test an event is of a specific type';
      const isEventType1 = isEventOfType(eventType1);
      const isEventType2 = isEventOfType(eventType2);

      and: 'calling them';
      const isType1 = isEventType1(event);
      const isType2 = isEventType2(event);

      expect: 'true to be returned when the event type matches';
      isType1 === true;
      isType2 === false;
    },
    'returns true when a type and name match'() {
      when: 'creating functions that test an event is of a specific type and name';
      const isEventType1 = isEventOfType(eventType1);
      const isEventType2 = isEventOfType(eventType2);

      and: 'calling them';
      const isType1 = isEventType1(event);
      const isType2 = isEventType2(event);

      expect: 'true to be returned when the event type matches';
      isType1 === true;
      isType2 === false;
    },
  };
});
