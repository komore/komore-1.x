import { type UUID } from '@komore/uuid';

/**
 * Chime account identifier
 */
export type ChimeAccountId = UUID & {
  readonly __tag_awsChimeAccountId: unique symbol;
};
