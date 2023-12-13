import { createEventType } from '@komore/event';

import { cargoDomain } from './cargo.domain';

/**
 * Cargo event
 */
export const cargoEvent = createEventType(cargoDomain, {});
