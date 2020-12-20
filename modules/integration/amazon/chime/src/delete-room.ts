import { ChimeClient, DeleteRoomCommand, DeleteRoomCommandInput } from '@aws-sdk/client-chime';
import { sendCommand } from '@komore/integration-aws';

/**
 * Deletes a room
 * @param chimeClient Chime client
 * @param commandInput `DeleteRoom` command input
 * @returns `DeleteRoom` command output
 * @note {@link https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoom.html DeleteRoom}
 */
export const deleteRoom = (chimeClient: ChimeClient, commandInput: DeleteRoomCommandInput) =>
  sendCommand(chimeClient, new DeleteRoomCommand(commandInput));
