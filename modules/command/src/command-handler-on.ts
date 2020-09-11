import { Event } from '@komore/event';
import { Observable } from 'rxjs';
import { Command, CommandType } from './command';
import { CommandCreator, CommandCreatorCommandType } from './command-creator';
import { CommandMetadata } from './command-metadata';

/**
 * Type returned by the `on` function
 * @template C Command type
 * @template E Event types
 */
export type On<C extends Command<any, any>, E extends Event<any, any>[] | void> = Readonly<{
  commandHandler: OnCommandHandler<CommandType<C>, E>;
  type: CommandType<C>;
}>;

/**
 * Specialized command type aware handler
 * @param command$ Command and associated metadata stream
 * @returns Observable event
 * @template CC Command creator type
 * @template E Event types
 */
export type OnCommandHandler<CC extends CommandCreator<any, any>, E extends Event<any, any>[] | void> = (
  command$: Observable<{ command: CommandCreatorCommandType<CC>, metadata: CommandMetadata }>
) => Observable<E extends Event<any, any>[] ? E[number] : void>;

export function on<CC extends CommandCreator<any, any>>(commandCreator: CC, commandHandler: OnCommandHandler<CC, void>): On<CC, void>;
export function on<CC extends CommandCreator<any, any>, E extends Event<any, any>[]>(commandCreator: CC, commandHandler: OnCommandHandler<CC, E>): On<CC, E>;

/**
 * Associates a command with a command handler function
 * @param commandCreator Command creator
 * @param commandHandler Command handler
 * @returns Command handler bound to the command type created by the command creator
 * @template CC Command creator type
 * @template E Event types
 */
export function on<CC extends CommandCreator<any, any>, E extends Event<any, any>[] | void>(
  commandCreator: CC,
  commandHandler: OnCommandHandler<CC, E>
): On<CC, E> {
  return {
    commandHandler,
    type: commandCreator.type
  };
}
