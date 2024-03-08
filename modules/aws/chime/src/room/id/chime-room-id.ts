import { type UUID } from '@komore/uuid';

/**
 * Chime room identifier
 */
export type ChimeRoomId = UUID & {
  readonly __tag_awsChimeRoomId: unique symbol;
};
