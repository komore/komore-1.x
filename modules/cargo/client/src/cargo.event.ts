import { cargoDomain } from '@komore/cargo';
import { createEventType, eventProperties } from '@komore/event';

/**
 * Cargo event
 */
export const cargoEvent = createEventType(cargoDomain, {
  installed: eventProperties(),
});
