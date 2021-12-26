import { Observable, shareReplay, type Subject } from '@komore/reactive';
import { type HostState } from '@komore/runtime';

/**
 * Mocks the host state
 * @param hostState Host state subject
 * @returns Function that restores the original mock state when called
 */
export function mockHostState(_hostState: Subject<HostState>): Observable<void> {
  return new Observable<void>(subscriber => {
    // TODO: mock
    subscriber.next();
    subscriber.add(() => {
      // TODO: unmock
    });
  }).pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );
}
