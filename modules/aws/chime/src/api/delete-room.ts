import { type ChimeClient, DeleteRoomCommand, type DeleteRoomCommandInput } from '@aws-sdk/client-chime';
import { sendAwsCommand, type FixedAwsType } from '@komore/integration-aws';
import { redactValue, type Observable } from '@komore/reactive';

/**
 * Deletes a room
 *
 * @param chimeClient Chime client
 * @param commandInput `DeleteRoom` command input
 * @returns `DeleteRoom` command output
 * @note {@link https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoom.html DeleteRoom}
 */
export function deleteRoom(chimeClient: ChimeClient, commandInput: DeleteRoomCommandInputFixed): Observable<void> {
  return sendAwsCommand(chimeClient, new DeleteRoomCommand(commandInput)).pipe(redactValue());
}

type DeleteRoomCommandInputFixed = FixedAwsType<DeleteRoomCommandInput, 'AccountId' | 'RoomId'>;
