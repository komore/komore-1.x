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
 * @template InputType Input type
 * @template OutputType Output type
 * @returns Command output
 */
export function sendCommand<
  AmazonClientHandlerOptions,
  AmazonClientInput extends object, // eslint-disable-line @typescript-eslint/ban-types
  AmazonClientOutput extends MetadataBearer,
  AmazonClientResolvedConfiguration extends SmithyResolvedConfiguration<AmazonClientHandlerOptions>,
  InputType extends AmazonClientInput,
  OutputType extends AmazonClientOutput
>(
  amazonClient: Client<
    AmazonClientHandlerOptions,
    AmazonClientInput,
    AmazonClientOutput,
    AmazonClientResolvedConfiguration
  >,
  command: Command<
    AmazonClientInput,
    InputType,
    AmazonClientOutput,
    OutputType,
    SmithyResolvedConfiguration<AmazonClientHandlerOptions>
  >,
  options?: AmazonClientHandlerOptions
): Observable<OutputType> {
  const x = deferPromise(() => amazonClient.send(command, options));
  return x;
}

import { S3Client } from '@Aws-sdk/client-s3';
import type { ListObjectsV2Command } from '@Aws-sdk/client-s3';
const s3Client = new S3Client({});
const cmd: ListObjectsV2Command = undefined as unknown as ListObjectsV2Command;
sendCommand(s3Client, cmd);
s3Client.send(cmd);
