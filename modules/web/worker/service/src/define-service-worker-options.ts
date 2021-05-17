import type { Observable } from '@komore/reactive';

/**
 * Define service worker options
 */
export interface DefineServiceWorkerOptions {
  readonly install: Observable<void>;
}
