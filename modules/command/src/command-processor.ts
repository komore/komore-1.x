import { type Message } from '@komore/message';
import { type Observable } from '@komore/reactive';
import { type Command } from './command';

/**
 * Command processor
 * @template M Message types
 * @template C Command types
 */
export type CommandProcessor<M extends Message<any, any>[], C extends Command<any, any>[]> = {
  /**
   * Processes a message into a command
   * @param message Message
   * @returns Command
   */
  (message: M[number]): Observable<C[number]>;
}

/**
 * Get the message types from a command processor type
 * @template CP Command processor type
 */
export type CommandProcessorMessageType<CP> = CP extends CommandProcessor<infer M, any> ? M : never;

/**
 * Get the command types from a command processor type
 * @template CP Command processor type
 */
export type CommandProcessorCommandType<CP> = CP extends CommandProcessor<any, infer C> ? C : never;
