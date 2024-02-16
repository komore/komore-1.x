import { testDomain } from '@komore/domain/testing';
import { createEventType, eventProperties } from '@komore/event';

/**
 * Test event
 */
export const testEvent = createEventType(testDomain, {
  event: eventProperties<{ readonly test: boolean }>(),
  eventWithoutProperties: eventProperties(),
});
