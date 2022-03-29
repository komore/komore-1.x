import { type HostState } from './host-state';

/**
 * Creates a function that tests whether a host state matches an expected host state
 * @param expectedHostState Expected host state
 * @returns Function that tests whether a host state matches the expected host state
 * @template ExpectedHostState Expected host state type
 */
export function hostHas<ExpectedHostState extends HostState>(
  expectedHostState: ExpectedHostState
): (hostState: HostState) => hostState is ExpectedHostState {
  return (hostState): hostState is ExpectedHostState => hostState === expectedHostState;
}
