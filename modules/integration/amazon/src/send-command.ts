import type { Client, SmithyResolvedConfiguration } from '@aws-sdk/smithy-client';
import type { Command, MetadataBearer } from '@aws-sdk/types';
import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive/promise';

/**
 * Sends a command using a client
 * @param amazonClient Client
 * @param command Command
 * @param options Options
 * @template AmazonClientHandlerOptions Amazon client handler options
 * @template AmazonClientInput Amazon client input
 * @template AmazonClientOutput Amazon client output
 * @template AmazonClientResolvedConfiguration Amazon client resolved configuration
 * @template AmazonClientType Amazon client type
 * @template InputType Input type
 * @template OutputType Output type
 * @returns Command output
 */
export function sendCommand<
  AmazonClientHandlerOptions,
  AmazonClientInput extends object,
  AmazonClientOutput extends MetadataBearer,
  AmazonClientResolvedConfiguration extends SmithyResolvedConfiguration<AmazonClientHandlerOptions>,
  AmazonClientType extends Client<
    AmazonClientHandlerOptions,
    AmazonClientInput,
    AmazonClientOutput,
    AmazonClientResolvedConfiguration
  >,
  InputType extends AmazonClientInput,
  OutputType extends AmazonClientOutput
>(
  amazonClient: AmazonClientType,
  command: Command<
    AmazonClientInput,
    InputType,
    AmazonClientOutput,
    OutputType,
    SmithyResolvedConfiguration<AmazonClientHandlerOptions>
  >,
  options?: AmazonClientHandlerOptions
): Observable<OutputType> {
  return deferPromise(() => amazonClient.send(command, options));
}
