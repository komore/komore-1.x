import { type hostStates } from './host-states';

/**
 * Host state
 */
export type HostState = (typeof hostStates)[number];
