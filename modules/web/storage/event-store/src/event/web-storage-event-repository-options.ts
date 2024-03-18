import { type EventType as GenericEventType } from '@komore/event';

/**
 * Web storage event repository options
 *
 * @template EventType Event type
 */
export interface WebStorageEventRepositoryOptions<EventType extends GenericEventType> {
  /**
   * Event type
   */
  readonly eventType: EventType;
  /**
   * Storage
   */
  readonly storage: Storage;
}
