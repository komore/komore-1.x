import { ChimeClient, CreateRoomCommand, CreateRoomCommandInput } from '@aws-sdk/client-chime';
import { sendCommand } from '@komore/integration-aws';

/**
 * Creates a room
 * @param chimeClient Chime client
 * @param commandInput `CreateRoom` command input
 * @returns `CreateRoom` command output
 * @note {@link https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoom.html CreateRoom}
 */
export const createRoom = (chimeClient: ChimeClient, commandInput: CreateRoomCommandInput) =>
  sendCommand(chimeClient, new CreateRoomCommand(commandInput));
