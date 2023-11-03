import { type GenericEvent } from '../generic-event';
import { type EventCreator } from './event-creator';

/**
 * Event from a creator type
 *
 * @template CreatorType Creator type
 */
export type EventFromCreator<CreatorType extends EventCreator<GenericEvent>> = ReturnType<CreatorType>;
