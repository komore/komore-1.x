import { type TypeCreator } from '@komore/typescript';

/**
 * Log event creator
 *
 * @template LogEventName Log event name
 * @template TypeCreatorType Type creator type
 * @private
 */
export type LogEventCreator<EventName extends string, TypeCreatorType extends TypeCreator<any, any>> = {
  /**
   * Log event name
   */
  readonly name: EventName;
} & TypeCreatorType;
