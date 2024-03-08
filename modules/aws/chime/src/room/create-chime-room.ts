import { type ChimeApiClient } from '../chime-api-client';
import { type CreateChimeRoomParameters } from './create-chime-room-parameters';
import { type CreateChimeRoomResult } from './create-chime-room-result';

/**
 * Creates a function that creates a Chime room
 *
 * @param apiClient Chime API client
 * @returns `CreateRoom` command output
 * @note {@link https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoom.html CreateRoom}
 */
export function createChimeRoom(
  apiClient: ChimeApiClient
): (parameters: CreateChimeRoomParameters) => Observable<CreateChimeRoomResult> {
  return ({ AccountId, ...parameters }) =>
    apiClient({ operation: 'chime.CreateRoom', parameters, resourcePath: `accounts/${AccountId}/rooms` });
}
