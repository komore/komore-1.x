import type { Observable } from '@komore/reactive';
import { deferPromise } from '@komore/reactive';

/**
 * Registers a service worker
 * @param scriptURL Service worker script URL
 * @param options Service worker registration options
 * @returns Service worker registration
 */
export function registerServiceWorker(scriptURL: URL, options?: RegistrationOptions): Observable<ServiceWorkerRegistration> {
  return deferPromise(() => navigator.serviceWorker.register(scriptURL, options));
}
