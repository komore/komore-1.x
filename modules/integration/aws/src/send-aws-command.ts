import { type Client, type SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import { type Command, type MetadataBearer } from '@aws-sdk/types';
import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Sends an AWS command using an AWS client
 *
 * @param awsClient AWS client
 * @param command Command
 * @param options Options
 * @returns Command output
 * @template AwsClientHandlerOptions Amazon client handler options
 * @template AwsClientInput Amazon client input
 * @template AwsClientOutput Amazon client output
 * @template AwsClientResolvedConfiguration Amazon client resolved configuration
 * @template InputType Input type
 * @template OutputType Output type
 */
export function sendAwsCommand<
  AwsClientHandlerOptions,
  AwsClientInput extends object,
  AwsClientOutput extends MetadataBearer,
  AwsClientResolvedConfiguration extends SmithyResolvedConfiguration<AwsClientHandlerOptions>,
  InputType extends AwsClientInput,
  OutputType extends AwsClientOutput
>(
  awsClient: Client<AwsClientHandlerOptions, AwsClientInput, AwsClientOutput, AwsClientResolvedConfiguration>,
  command: Command<
    AwsClientInput,
    InputType,
    AwsClientOutput,
    OutputType,
    SmithyResolvedConfiguration<AwsClientHandlerOptions>
  >,
  options?: AwsClientHandlerOptions
): Observable<OutputType> {
  return deferPromise(() => awsClient.send(command, options));
}
