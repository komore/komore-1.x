import { type EToroMessage } from './etoro-message';

/**
 * eToro messages
 */
export interface EToroMessages {
  readonly Messages: ReadonlyArray<EToroMessage>;
  readonly Meta: {
    readonly NotSeen: number;
  };
}
