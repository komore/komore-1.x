import { Event } from '@komore/event';
import { Observable } from 'rxjs';
import { Command } from './command';
import { CommandMetadata } from './command-metadata';

/**
 * Command handler
 * @param command Command
 * @param metadata Event metadata
 * @returns Observable events
 * @template C Command type
 * @template E Event type
 */
export type CommandHandler<C extends Command<any, any>[], E extends Event<any, any>[]> = (
  command: C[number],
  metadata: CommandMetadata
) => Observable<E[number]>;
