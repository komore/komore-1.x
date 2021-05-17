import { fromEvent } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

declare const self: ServiceWorkerGlobalScope;

export function defineServiceWorker(): void {
  // TODO: remove manual typing when fromEvent is fixed

  return fromEvent<ExtendableEvent>(self, 'install').pipe(
    map(event => {
      event.
      event.waitUntil();
    })
  );
  self.addEventListener('install');
}
