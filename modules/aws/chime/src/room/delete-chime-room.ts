import { type ChimeApiClient } from '../chime-api-client';
import { type DeleteChimeRoomParameters } from './delete-chime-room-parameters';

/**
 * Creates a function that deletes a Chime room
 *
 * @param apiClient Chime API client
 * @returns Function that deletes a Chime room
 * @note {@link https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoom.html DeleteRoom}
 */
export function deleteChimeRoom(
  apiClient: ChimeApiClient
): (parameters: DeleteChimeRoomParameters) => Observable<void> {
  return ({ AccountId, RoomId }) =>
    apiClient({
      method: 'DELETE',
      operation: 'chime.DeleteRoom',
      resourcePath: `accounts/${AccountId}/rooms/${RoomId}`,
    });
}
