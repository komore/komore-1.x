import { Client, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { Command, MetadataBearer } from '@aws-sdk/types';
import { Observable, pipe, UnaryFunction } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { sendCommand } from './send-command';

/**
 * Sends a command with a specific client
 * @param client Client
 * @param options Options
 * @returns Function that merge maps commands to command outputs
 */
export function sendCommandWith<
  HandlerOptions,
  ClientInput extends object,
  ClientOutput extends MetadataBearer,
  InputType extends ClientInput,
  OutputType extends ClientOutput,
  ResolvedClientConfiguration extends SmithyResolvedConfiguration<HandlerOptions>
>(
  client: Client<HandlerOptions, ClientInput, ClientOutput, ResolvedClientConfiguration>,
  options?: HandlerOptions
): UnaryFunction<
  Observable<Command<ClientInput, InputType, ClientOutput, OutputType, SmithyResolvedConfiguration<HandlerOptions>>>,
  Observable<OutputType>
> {
  return pipe(mergeMap(command => sendCommand(command, client, options)));
}
