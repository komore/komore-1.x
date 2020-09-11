import { Client, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { Command, MetadataBearer } from '@aws-sdk/types';
import { defer, Observable } from 'rxjs';

/**
 * Sends a command using a client
 * @param command Command
 * @param client Client
 * @param options Options
 * @returns Observable command output
 */
export function sendCommand<
  HandlerOptions,
  ClientInput extends object,
  ClientOutput extends MetadataBearer,
  InputType extends ClientInput,
  OutputType extends ClientOutput,
  ResolvedClientConfiguration extends SmithyResolvedConfiguration<HandlerOptions>
>(
  command: Command<ClientInput, InputType, ClientOutput, OutputType, SmithyResolvedConfiguration<HandlerOptions>>,
  client: Client<HandlerOptions, ClientInput, ClientOutput, ResolvedClientConfiguration>,
  options?: HandlerOptions
): Observable<OutputType> {
  return defer(() => client.send(command, options));
}
