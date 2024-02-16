import { type OnEvent } from './on-event';

/**
 * Event reducer on state type
 *
 * @template OnType Event reducer on type
 * @private
 */
export type OnStateType<OnType> = OnType extends OnEvent<infer StateType, any> ? StateType : never;
