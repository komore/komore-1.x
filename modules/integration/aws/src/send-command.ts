import { Client, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { Command, MetadataBearer } from '@aws-sdk/types';
import { defer, Observable } from 'rxjs';

/**
 * Sends a command using a client
 * @param command Command
 * @param client Client
 * @param options Options
 * @template AwsClientHandlerOptions AWS client handler options
 * @template AwsClientInput AWS client input
 * @template AwsClientOutput AWS client output
 * @template AwsClientResolvedConfiguration AWS client resolved configuration
 * @template InputType Input type
 * @template OutputType Output type
 * @returns Command output
 */
export function sendCommand<
  // TODO: @template
  AwsClientHandlerOptions,
  AwsClientInput extends object,
  AwsClientOutput extends MetadataBearer,
  AwsClientResolvedConfiguration extends SmithyResolvedConfiguration<AwsClientHandlerOptions>,
  AwsClientType extends Client<
    AwsClientHandlerOptions,
    AwsClientInput,
    AwsClientOutput,
    AwsClientResolvedConfiguration
  >,
  InputType extends AwsClientInput,
  OutputType extends AwsClientOutput
>(
  client: AwsClientType,
  command: Command<
    AwsClientInput,
    InputType,
    AwsClientOutput,
    OutputType,
    SmithyResolvedConfiguration<AwsClientHandlerOptions>
  >,
  options?: AwsClientHandlerOptions
): Observable<OutputType> {
  return defer(() => client.send(command, options));
}
