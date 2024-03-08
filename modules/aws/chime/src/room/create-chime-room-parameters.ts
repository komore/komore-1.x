import { type ChimeAccountId } from '../account/id/chime-account-id';
import { type ChimeClientRequestToken } from '../token/chime-client-request-token';
import { type ChimeRoomName } from './name/chime-room-name';

/**
 * Create Chime room parameters
 *
 * @see {@link https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoom.html#API_CreateRoom_RequestBody CreateRoom Request Body}
 */
export interface CreateChimeRoomParameters {
  /**
   * Account identifier
   */
  readonly AccountId: ChimeAccountId;
  /**
   * Client request token
   */
  readonly ClientRequestToken?: ChimeClientRequestToken;
  /**
   * Room name
   */
  readonly Name: ChimeRoomName;
}
