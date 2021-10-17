import type { HostState } from './host-state';

/**
 * Creates a function that returns true if a host state matches an expected host state
 * @param expectedHostState Expected host state
 * @returns Function that returns true if a host state matches the expected host state
 */
export function hostStateIs<State extends HostState>(
  expectedHostState: HostState
): (hostState: HostState) => hostState is State {
  return (hostState): hostState is State => hostState === expectedHostState;
}
