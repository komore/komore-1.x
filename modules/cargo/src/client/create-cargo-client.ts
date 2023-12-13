import { createClient } from '@komore/client';

import { cargoCommand } from '../cargo.command';
import { cargoError } from '../cargo.error';
import { cargoEvent } from '../cargo.event';
import { cargoQuery } from '../cargo.query';
import { cargoCommandEventMap } from '../command/cargo-command-event-map';
import { type CargoClient } from './cargo-client';
import { type CargoClientOptions } from './cargo-client-options';
import { executeCargoCommand } from './execute-cargo-command';

/**
 * Creates a Cargo client
 *
 * @param clientOptions Cargo client options
 * @returns Cargo client
 */
export function createCargoClient(clientOptions: CargoClientOptions): CargoClient {
  const { basePath } = clientOptions;
  const executeCommand = executeCargoCommand(basePath);
  executeCommand;
  return createClient({
    command: cargoCommand,
    commandEventMap: cargoCommandEventMap,
    commandHandler: events => createCargoCommandHandler({ events }),
    error: cargoError,
    event: cargoEvent,
    query: cargoQuery,
    queryHandler: () => createCargoQueryHandler(),
  });
}
