import { type CommandName, type GenericCommandType } from '@komore/command';
import { type EventName, type GenericEventType } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

export function createClientCommandEventMap<
  CommandType extends GenericCommandType,
  EventType extends GenericEventType,
>(): <const CommandEventMapType extends ReadonlyRecord<CommandName<CommandType>, EventName<EventType>>>(
  map: CommandEventMapType
) => CommandEventMapType {
  return map => map;
}
