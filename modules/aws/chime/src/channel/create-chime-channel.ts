import { type ChimeClient, CreateChannelCommand, type CreateChannelCommandInput } from '@aws-sdk/client-chime';

import { sendAwsCommand } from '@komore/aws';

import { map } from '@komore/reactive';

/**
 * Creates a channel
 *
 * @param chimeClient Chime client
 * @param commandInput `CreateChannel` command input
 * @returns Channel ARN
 * @note {@link https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateChannel.html CreateChannel}
 */
export function createChannel(chimeClient: ChimeClient, commandInput: CreateChannelCommandInput): Observable<string> {
  return sendAwsCommand(chimeClient, new CreateChannelCommand(commandInput)).pipe(
    map(output => output.ChannelArn as string)
  );
}
