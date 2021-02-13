import { Subject } from 'rxjs';

/**
 * Host state
 */
export type HostState = 'starting' | 'running' | 'paused' | 'stopping' | 'stopped';

export const hostStateSubject = new Subject<HostState>();

export const hostState = hostStateSubject.asObservable();
