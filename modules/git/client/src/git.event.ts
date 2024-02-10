import { createEventType, eventProperties } from '@komore/event';
import { gitDomain } from '@komore/git';

/**
 * Git event
 */
export const gitEvent = createEventType(gitDomain, {
  /**
   * Objects and refs downloaded from another repository
   *
   * @see {@link https://git-scm.com/docs/git-fetch git fetch}
   */
  fetched: eventProperties(),
  /**
   * A Git repository has been initialized
   *
   * @see {@link https://git-scm.com/docs/git-init git init}
   */
  initialized: eventProperties(),
  /**
   * Remote refs updated
   *
   * @see {@link https://git-scm.com/docs/git-push git push}
   */
  pushed: eventProperties(),
});
