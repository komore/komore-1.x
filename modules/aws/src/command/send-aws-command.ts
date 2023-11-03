import { type Command, type MetadataBearer } from '@aws-sdk/types';
import { type Client, type SmithyResolvedConfiguration } from '@smithy/smithy-client';

import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Creates a function that sends an AWS command using an AWS client
 *
 * @param awsClient AWS client
 * @returns Function that sends an AWS command using an AWS client
 * @template AwsClientHandlerOptions Amazon client handler options
 * @template AwsClientInput Amazon client input
 * @template AwsClientOutput Amazon client output
 * @template AwsClientResolvedConfiguration Amazon client resolved configuration
 */
export function sendAwsCommand<
  AwsClientHandlerOptions,
  AwsClientInput extends object,
  AwsClientOutput extends MetadataBearer,
  AwsClientResolvedConfiguration extends SmithyResolvedConfiguration<AwsClientHandlerOptions>,
>(
  awsClient: Client<AwsClientHandlerOptions, AwsClientInput, AwsClientOutput, AwsClientResolvedConfiguration>
): <InputType extends AwsClientInput, OutputType extends AwsClientOutput>(
  command: Command<
    AwsClientInput,
    InputType,
    AwsClientOutput,
    OutputType,
    SmithyResolvedConfiguration<AwsClientHandlerOptions>
  >,
  options?: AwsClientHandlerOptions
) => Observable<OutputType> {
  return (command, options) => deferPromise(() => awsClient.send(command, options));
}
