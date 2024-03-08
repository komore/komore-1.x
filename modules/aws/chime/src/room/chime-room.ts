import { type ChimeAccountId } from '../account/id/chime-account-id';
import { type ChimeRoomId } from './id/chime-room-id';
import { type ChimeRoomName } from './name/chime-room-name';

/**
 * Chime room
 */
export interface ChimeRoom {
  /**
   * Account identifier
   */
  readonly AccountId: ChimeAccountId;
  /**
   * Identifier of the room creator
   */
  readonly CreatedBy: string; // TODO: type
  readonly CreatedTimestamp: string; // TODO: type
  readonly Name: ChimeRoomName;
  readonly RoomId: ChimeRoomId;
  readonly UpdatedTimestamp: string;
}
