import type { Subject } from '@komore/reactive';
import type { HostState } from '@komore/runtime';

/**
 * Mocks the host state
 * @param hostState Host state subject
 * @returns Function that restores the original mock state when called
 */
export function mockHostState(_hostState: Subject<HostState>): () => void {
  // TODO
  return () => void 0;
}
