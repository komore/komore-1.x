import { type ChimeAccountId } from '../account/id/chime-account-id';
import { type ChimeRoomId } from './id/chime-room-id';

/**
 * Delete Chime room parameters
 *
 * @see {@link https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoom.html#API_DeleteRoom_RequestParameters DeleteRoom URI Request Parameters}
 */
export interface DeleteChimeRoomParameters {
  /**
   * Account identifier
   */
  readonly AccountId: ChimeAccountId;
  /**
   * Room identifier
   */
  readonly RoomId: ChimeRoomId;
}
