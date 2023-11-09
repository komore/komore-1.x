import { type TypeCreator } from '@komore/typescript';

import { type EventCreator } from '../creator/event-creator';

/**
 * Event creator entry
 *
 * @private
 */
export type EventCreatorEntry = readonly [eventName: string, eventCreator: EventCreator<string, TypeCreator<any, any>>];
