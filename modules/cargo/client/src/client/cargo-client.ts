import { type Client } from '@komore/client';

import { type cargoCommand } from '../cargo.command';
import { type cargoError } from '../cargo.error';
import { type cargoEvent } from '../cargo.event';
import { type cargoQuery } from '../cargo.query';
import { type cargoCommandEventMap } from '../command/cargo-command-event-map';

/**
 * Cargo client
 */
export type CargoClient = Client<
  typeof cargoCommand,
  typeof cargoEvent,
  typeof cargoQuery,
  typeof cargoError,
  typeof cargoCommandEventMap
>;
