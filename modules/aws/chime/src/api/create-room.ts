import { CreateRoomCommand, type ChimeClient, type CreateRoomCommandInput, type Room } from '@aws-sdk/client-chime';

import { sendAwsCommand, type FixedAwsType } from '@komore/aws';

import { map } from '@komore/reactive';

/**
 * Creates a room
 *
 * @param chimeClient Chime client
 * @param commandInput `CreateRoom` command input
 * @returns `CreateRoom` command output
 * @note {@link https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoom.html CreateRoom}
 */
export function createRoom(chimeClient: ChimeClient, commandInput: CreateRoomCommandInputFixed): Observable<Room> {
  return sendAwsCommand(chimeClient, new CreateRoomCommand(commandInput)).pipe(map(output => output.Room as Room));
}

type CreateRoomCommandInputFixed = FixedAwsType<CreateRoomCommandInput, 'AccountId' | 'Name'>;
