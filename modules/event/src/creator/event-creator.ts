import { type TypeCreator } from '@komore/typescript';

/**
 * Event creator
 *
 * @template EventName Event name
 * @template TypeCreatorType Type creator type
 * @private
 */
export type EventCreator<EventName extends string, TypeCreatorType extends TypeCreator<any, any>> = {
  /**
   * Event name
   */
  readonly name: EventName;
} & TypeCreatorType;
