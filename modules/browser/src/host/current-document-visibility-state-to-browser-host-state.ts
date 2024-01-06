import { type HostState } from '@komore/runtime/host';

export function currentDocumentVisibilityStateToBrowserHostState(): HostState {
  return document.visibilityState === 'hidden' ? 'paused' : 'running';
}
