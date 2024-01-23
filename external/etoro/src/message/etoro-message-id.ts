import { type UUID } from '@komore/uuid';

/**
 * eToro message identifier
 */
export type EToroMessageId = UUID & {
  readonly __tag_eToroMessageId: unique symbol;
};
