import { ReplaySubject } from '@komore/reactive';
import { type HostState } from './host-state';

/**
 * Host state subject
 */
export const hostStateSubject = new ReplaySubject<HostState>(1);
