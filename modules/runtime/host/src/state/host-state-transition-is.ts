import { type HostStateTransition } from './host-state-transition';

/**
 * Creates a function that tests whether a state transition matches an expected previous and current state
 *
 * @param expectedHostStateTransition Expected host state transition
 * @returns Function that tests whether a state transition matches an expected previous and current state
 */
export function hostStateTransitionIs(
  expectedHostStateTransition: HostStateTransition
): (hostStateTransition: HostStateTransition) => boolean {
  const { previous: expectedPrevious, current: expectedCurrent } = expectedHostStateTransition;
  return ({ previous, current }) => previous === expectedPrevious && current === expectedCurrent;
}
