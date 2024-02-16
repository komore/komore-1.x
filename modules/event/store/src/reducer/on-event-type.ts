import { type OnEvent } from './on-event';

/**
 * Event reducer on event type
 *
 * @template OnType Event reducer on type
 */
export type OnEventType<OnType> = OnType extends OnEvent<any, infer EventType> ? EventType : never;
