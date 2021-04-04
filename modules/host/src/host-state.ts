import { Subject } from 'rxjs';

/**
 * Host state
 */
export type HostState = 'starting' | 'running' | 'paused' | 'stopping' | 'stopped';

/**
 * Host state subject
 */
export const hostStateSubject = new Subject<HostState>();

/**
 * Host state observable
 */
export const hostState = hostStateSubject.asObservable();
